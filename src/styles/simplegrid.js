import { createGlobalStyle } from "styled-components";

const SimpleGrid = createGlobalStyle`

  [class*='grid'],
  [class*='col-'],
  [class*='mobile-'],
  .grid:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  [class*='col-'] {
    float: left;
    min-height: 1px;
    padding-right: 20px; /* column-space */
  }

  [class*='col-'] [class*='col-']:last-child {
    padding-right: 0;
  }

  .grid {
    width: 100%;
    max-width: 1140px;
    min-width: 748px; /* when using padded grid on ipad in portrait mode, width should be viewport-width - padding = (768 - 20) = 748. actually, it should be even smaller to allow for padding of grid containing element */
    margin: 0 auto;
    overflow: hidden;
  }

  .grid:after {
    content: "";
    display: table;
    clear: both;
  }

  .grid-pad {
    padding-top: 20px;
    padding-left: 20px; /* grid-space to left */
    padding-right: 0; /* grid-space to right: (grid-space-left - column-space) e.g. 20px-20px=0 */
  }

  .push-right {
    float: right;
  }

  /* Content Columns */

  .col-1-1 {
    width: 100%;
  }
  .col-2-3, .col-8-12 {
    width: 66.66%;
  }

  .col-1-2, .col-6-12 {
    width: 50%;
  }

  .col-1-3, .col-4-12 {
    width: 33.33%;
  }

  .col-1-4, .col-3-12 {
    width: 25%;
  }

  .col-1-5 {
    width: 20%;
  }

  .col-1-6, .col-2-12 {
    width: 16.667%;
  }

  .col-1-7 {
    width: 14.28%;
  }

  .col-1-8 {
    width: 12.5%;
  }

  .col-1-9 {
    width: 11.1%;
  }

  .col-1-10 {
    width: 10%;
  }

  .col-1-11 {
    width: 9.09%;
  }

  .col-1-12 {
    width: 8.33%
  }

  /* Layout Columns */

  .col-11-12 {
    width: 91.66%
  }

  .col-10-12 {
    width: 83.333%;
  }

  .col-9-12 {
    width: 75%;
  }

  .col-5-12 {
    width: 41.66%;
  }

  .col-7-12 {
    width: 58.33%
  }

  /* Pushing blocks */

  .push-2-3, .push-8-12 {
    margin-left: 66.66%;
  }

  .push-1-2, .push-6-12 {
    margin-left: 50%;
  }

  .push-1-3, .push-4-12 {
    margin-left: 33.33%;
  }

  .push-1-4, .push-3-12 {
    margin-left: 25%;
  }

  .push-1-5 {
    margin-left: 20%;
  }

  .push-1-6, .push-2-12 {
    margin-left: 16.667%;
  }

  .push-1-7 {
    margin-left: 14.28%;
  }

  .push-1-8 {
    margin-left: 12.5%;
  }

  .push-1-9 {
    margin-left: 11.1%;
  }

  .push-1-10 {
    margin-left: 10%;
  }

  .push-1-11 {
    margin-left: 9.09%;
  }

  .push-1-12 {
    margin-left: 8.33%
  }

  @media handheld, only screen and (max-width: 767px) {
    .grid {
      width: 100%;
      min-width: 0;
      margin-left: 0;
      margin-right: 0;
      padding-left: 20px; /* grid-space to left */
      padding-right: 10px; /* grid-space to right: (grid-space-left - column-space) e.g. 20px-10px=10px */
    }

    [class*='col-'] {
      width: auto;
      float: none;
      margin: 10px 0;
      padding-left: 0;
      padding-right: 10px; /* column-space */
    }

    [class*='col-'] [class*='col-'] {
      padding-right: 0;
    }

    /* Mobile Layout */

    [class*='mobile-col-'] {
      float: left;
      margin: 0 0 10px;
      padding-left: 0;
      padding-right: 10px; /* column-space */
      padding-bottom: 0;
    }

    .mobile-col-1-1 {
      width: 100%;
    }
    .mobile-col-2-3, .mobile-col-8-12 {
      width: 66.66%;
    }

    .mobile-col-1-2, .mobile-col-6-12 {
      width: 50%;
    }

    .mobile-col-1-3, .mobile-col-4-12 {
      width: 33.33%;
    }

    .mobile-col-1-4, .mobile-col-3-12 {
      width: 25%;
    }

    .mobile-col-1-5 {
      width: 20%;
    }

    .mobile-col-1-6, .mobile-col-2-12 {
      width: 16.667%;
    }

    .mobile-col-1-7 {
      width: 14.28%;
    }

    .mobile-col-1-8 {
      width: 12.5%;
    }

    .mobile-col-1-9 {
      width: 11.1%;
    }

    .mobile-col-1-10 {
      width: 10%;
    }

    .mobile-col-1-11 {
      width: 9.09%;
    }

    .mobile-col-1-12 {
      width: 8.33%
    }

    /* Layout Columns */

    .mobile-col-11-12 {
      width: 91.66%
    }

    .mobile-col-10-12 {
      width: 83.333%;
    }

    .mobile-col-9-12 {
      width: 75%;
    }

    .mobile-col-5-12 {
      width: 41.66%;
    }

    .mobile-col-7-12 {
      width: 58.33%
    }

    .hide-on-mobile {
      display: none !important;
      width: 0;
      height: 0;
    }
  }`;

export { SimpleGrid };
