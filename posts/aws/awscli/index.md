---
category: aws
index: 1
title: AWS 커맨드 라인 인터페이스
description: 보안 그룹 하나만 수정하면 되는데 AWS 웹 인터페이스 안에서 시간을 낭비한 경험이 있으신가요? 이제 터미널에서 AWS 웹과 동일한 기능을 구현하는 명령을 실행하세요.
date: 2020-05-17
---

**AWS 커맨드 라인 인터페이스**(AWS CLI, AWS Command Line Interface)는 AWS 서비스를 관리하는 통합 도구로 여러 AWS 서비스를 명령줄에서 제어합니다. 주로 자동화 처리 목적으로 사용합니다.

## Install

`brew` 명령어로 설치하는 것을 권장합니다.

```shell{promptHost: localhost}
brew install awscli // AWS CLI
brew install jq     // JSON processor
```

## Configure

AWS 서비스를 사용하기 위하여 [IAM](https://console.aws.amazon.com/iam/home)에 사용자 정보를 등록합니다. (개별 IAM 사용자 생성 - 사용자 관리 - 사용자 추가) 등록을 완료하면 credentials 정보가 나옵니다. 해당 정보는 한 번 확인하면 새로 고침 시 재확인이 불가하기 때문에 꼭 파일로 저장해 두어야 합니다.

```shell{promptHost: localhost}
aws configure
```

```shell{promptHost: localhost}
AWS Access Key ID [None]: AKI***
AWS Secret Access Key [None]: ***
Default region name [None]: ap-northeast-2
Default output format [None]:
```

사용자 정보 입력 후 엔터를 계속 입력하여 설정을 완료합니다. 해당 설정은 `~/.aws/` 폴더에 파일로 저장됩니다.

## Commands

[Reference](https://docs.aws.amazon.com/cli/latest/reference/) 참조

### ec2

```shell{promptHost: localhost}
aws ec2 describe-instances
```

## Scripts

### Security Group

필자가 작업하는 사무실은 유동 IP를 사용하여 매일 새 IP를 할당합니다. 새 IP를 할당하면 이전 IP로 서버 접속이 불가하여 AWS에서 보안 그룹의 사무실 IP 정보를 수정해야 합니다.

서버에 문제가 발생하였는데 그 사이에 IP가 바뀌면서 서버 접속이 불가하면 굉장히 난감한 상황이 됩니다. AWS에 접속하여 보안 그룹을 수정해야 하는데 복잡하기로 유명한 AWS 인터페이스 안에서 버벅이다가 작업이 늦춰질 수 있습니다.

다음 스크립트를 실행하면 설명과 일치하는 이전 IP 목록을 삭제한 후 새 IP를 추가할 수 있습니다.

```bash
MY_IP=$(curl -s https://checkip.amazonaws.com)

run() {
    echo "describe-security-groups $1"
    REMOTE_IP_LIST=$(aws ec2 describe-security-groups --group-id $1 | jq '.SecurityGroups[0].IpPermissions['$2'].IpRanges[] | select(.Description == "DUNAMU Office") | .CidrIp' -r)

    for REMOTE_IP in $REMOTE_IP_LIST
    do
        echo "revoke-security-group-ingress $REMOTE_IP"
        aws ec2 revoke-security-group-ingress --group-id $1 --protocol tcp --port 0-65535 --cidr $REMOTE_IP
    done

    echo "authorize-security-group-ingress $MY_IP"
    aws ec2 authorize-security-group-ingress --group-id $1 --ip-permissions IpProtocol=tcp,FromPort=0,ToPort=65535,IpRanges='[{CidrIp='$MY_IP'/32,Description="DUNAMU Office"}]'
    echo "\n"
}

run sg-***************** 1
run sg-***************** 1
run sg-***************** 0
```

