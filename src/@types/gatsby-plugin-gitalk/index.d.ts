declare module 'gatsby-plugin-gitalk' {
  export namespace Gitalk {
    export interface GitalkOptions {
      /**
       * GitHub Application Client ID.
       */
      clientID: string;

      /**
       * GitHub Application Client Secret.
       */
      clientSecret: string;

      /**
       * Name of Github repository.
       */
      repo: string;

      /**
       * GitHub repository owner.
       * Can be personal user or organization.
       */
      owner: string;

      /**
       * GitHub repository owner and collaborators.
       * (Users who having write access to this repository)
       */
      admin: string[];

      personalToken: string;

      /**
       * The unique id of the page.
       * Length must less than 50.
       *
       * @default location.href
       */
      id?: string;

      /**
       * The issue ID of the page.
       * If the number attribute is not defined, issue will be located using id.
       *
       * @default -1
       */
      number?: number;

      /**
       * GitHub issue labels.
       *
       * @default ['Gitalk']
       */
      labels?: string[];

      /**
       * GitHub issue title.
       *
       * @default document.title
       */
      title?: string;

      /**
       * GitHub issue body.
       *
       * @default location.href + header.meta[description]
       */
      body?: string;

      description?: string;

      url?: string;

      /**
       * Localization language key.
       * en, zh-CN and zh-TW are currently available.
       *
       * @default navigator.language || navigator.userLanguage
       */
      language?: string;

      /**
       * Pagination size, with maximum 100.
       *
       * @default 10
       */
      perPage?: number;

      /**
       * Facebook-like distraction free mode.
       *
       * @default false
       */
      distractionFreeMode?: boolean;

      /**
       * Comment sorting direction.
       * Available values are last and first.
       *
       * @default "last"
       */
      pagerDirection?: 'last' | 'first';

      /**
       * By default, Gitalk will create a corresponding github issue for your every single page automatically when the logined user is belong to the admin users.
       * You can create it manually by setting this option to true.
       *
       * @default false
       */
      createIssueManually?: boolean;

      /**
       * GitHub oauth request reverse proxy for CORS.
       * [Why need this?](https://github.com/isaacs/github/issues/330)
       *
       * @default "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token"
       */
      proxy?: string;

      /**
       * Comment list animation.
       *
       * [Reference](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)
       *
       * Default value:
       * ```js
       * {
       *  staggerDelayBy: 150,
       *  appearAnimation: 'accordionVertical',
       *  enterAnimation: 'accordionVertical',
       *  leaveAnimation: 'accordionVertical',
       * }
       * ```
       */
      flipMoveOptions?: FlipMoveProps;

      /**
       * Enable hot key (cmd|ctrl + enter) submit comment.
       *
       * @default true
       */
      enableHotKey?: boolean;
    }
  }

  export interface GitalkProps {
    options?: Partial<Gitalk.GitalkOptions>;
  }

  export default function Gitalk(props: GitalkProps): JSX.Element;

  export namespace GitalkPluginHelper {
    export { createIssue };
  }

  export type IssueOptions = Pick<
    Gitalk.GitalkOptions,
    'clientID' | 'clientSecret' | 'repo' | 'owner' | 'id' | 'title' | 'description' | 'url' | 'personalToken'
  >;

  declare function createIssue(options: IssueOptions, reporter?: Console): Promise<void>;
}
