import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="footer-main-div">
        <div className="footer-first-section">
            <div className="footer-svg">
              <svg width="1131" height="271" viewBox="0 0 1131 271" fill="none" xmlns="http://www.w3. org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M375.484 70.5736C373.262 68.9244 370.916 67.3941 368.446 65.9826C357.449 59.6986 344.782 56.5565 330.447 56.5565C315.129 56.5565 301.776 59.8949 290.386 66.5717C279.193 73.0522 270.356 82.1837 263.875 93.9663C257.591 105.749 254.449 119.201 254.449 134.322C254.449 149.246 257.689 162.404 264.17 173.793C270.65 185.183 279.585 194.02 290.975 200.304C302.365 206.588 315.424 209.73 330.152 209.73C341.935 209.73 352.441 207.57 361.671 203.25C371.097 198.93 378.952 193.038 385.236 185.576C391.716 177.917 396.331 169.473 399.081 160.243H360.787C358.234 165.742 354.307 170.259 349.004 173.793C343.899 177.132 337.516 178.801 329.858 178.801C319.646 178.801 310.907 175.561 303.641 169.08C296.572 162.6 292.644 153.665 291.859 142.275H402.91C403.106 139.722 403.204 137.267 403.204 134.911C403.401 132.554 403.499 130.296 403.499 128.136C403.499 114.782 400.357 102.705 394.073 91.9044C393.254 90.4248 392.39 88.9879 391.483 87.5937L375.484 92.9264V70.5736ZM432.854 73.8031V142.57C432.854 164.564 437.764 181.256 447.582 192.646C457.598 204.036 471.737 209.73 490 209.73C501.39 209.73 511.307 207.178 519.751 202.072C528.392 196.966 534.97 190.093 539.487 181.452L542.432 206.196H575.718V60.0913H556.758V70.2402L538.014 76.4881V135.5C538.014 148.854 534.577 159.262 527.704 166.724C521.027 174.186 512.485 177.917 502.077 177.917C491.08 177.917 483.029 174.579 477.923 167.902C472.817 161.225 470.264 151.603 470.264 139.035V60.0913H443.461V70.2675L432.854 73.8031ZM1027.96 63.9207C1029.43 63.0046 1030.97 62.1741 1032.59 61.429V70.2467L1070.74 57.5317C1079.56 58.965 1087.69 61.9783 1095.12 66.5717C1105.92 73.2486 1114.46 82.3801 1120.75 93.9663C1127.03 105.553 1130.18 118.71 1130.18 133.438C1130.18 148.166 1127.03 161.324 1120.75 172.91C1114.46 184.3 1105.92 193.333 1095.12 200.01C1084.32 206.49 1072.05 209.73 1058.3 209.73C1047.3 209.73 1037.68 207.668 1029.43 203.545C1021.19 199.421 1014.51 193.628 1009.4 186.165V271H971.699V60.0913H1005.28L1009.4 81.0054C1014.12 74.525 1020.3 68.8301 1027.96 63.9207ZM0 0V206.196H37.7043V63.9207L95.1445 176.739H124.896L182.336 63.9207V206.196H220.04V0H175.266L110.462 130.787L44.7739 0H0ZM305.998 95.1446C313.068 89.8424 321.217 87.1913 330.447 87.1913C340.069 87.1913 348.121 90.0388 354.601 95.7337C361.082 101.429 364.616 109.087 365.206 118.71H292.448C294.412 108.105 298.928 100.25 305.998 95.1446ZM646.237 200.01C657.627 206.49 670.391 209.73 684.53 209.73C698.473 209.73 711.139 206.49 722.529 200.01C733.919 193.529 742.854 184.594 749.335 173.204C756.011 161.618 759.35 148.264 759.35 133.143C759.35 118.022 756.011 104.767 749.335 93.3772C742.854 81.7909 733.919 72.7576 722.529 66.2772C711.336 59.7967 698.768 56.5565 684.825 56.5565C670.686 56.5565 657.921 59.7967 646.531 66.2772C635.338 72.7576 626.403 81.7909 619.726 93.3772C613.049 104.767 609.711 118.022 609.711 133.143C609.711 148.264 612.951 161.618 619.431 173.204C626.108 184.594 635.043 193.529 646.237 200.01ZM710.157 166.135C702.891 173.401 694.349 177.034 684.53 177.034C674.711 177.034 666.169 173.401 658.903 166.135C651.833 158.672 648.299 147.675 648.299 133.143C648.299 118.612 651.833 107.713 658.903 100.447C666.169 92.9844 674.81 89.2533 684.825 89.2533C694.447 89.2533 702.891 92.9844 710.157 100.447C717.423 107.713 721.056 118.612 721.056 133.143C721.056 147.675 717.423 158.672 710.157 166.135ZM863.168 209.73C849.029 209.73 836.264 206.49 824.874 200.01C813.681 193.529 804.746 184.594 798.069 173.204C791.589 161.618 788.348 148.264 788.348 133.143C788.348 118.022 791.687 104.767 798.364 93.3772C805.04 81.7909 813.975 72.7576 825.169 66.2772C836.559 59.7967 849.323 56.5565 863.462 56.5565C877.405 56.5565 889.973 59.7967 901.167 66.2772C912.557 72.7576 921.492 81.7909 927.972 93.3772C934.649 104.767 937.987 118.022 937.987 133.143C937.987 148.264 934.649 161.618 927.972 173.204C921.492 184.594 912.557 193.529 901.167 200.01C889.777 206.49 877.111 209.73 863.168 209.73ZM863.168 177.034C872.987 177.034 881.529 173.401 888.795 166.135C896.061 158.672 899.694 147.675 899.694 133.143C899.694 118.612 896.061 107.713 888.795 100.447C881.529 92.9844 873.085 89.2533 863.462 89.2533C853.447 89.2533 844.807 92.9844 837.541 100.447C830.471 107.713 826.936 118.612 826.936 133.143C826.936 147.675 830.471 158.672 837.541 166.135C844.807 173.401 853.349 177.034 863.168 177.034ZM1080.1 164.662C1072.24 172.713 1062.33 176.739 1050.35 176.739C1038.17 176.739 1028.16 172.713 1020.3 164.662C1012.64 156.414 1008.81 145.908 1008.81 133.143C1008.81 120.379 1012.64 109.971 1020.3 101.92C1028.16 93.6717 1038.17 89.5478 1050.35 89.5478C1062.33 89.5478 1072.24 93.6717 1080.1 101.92C1087.95 110.167 1091.88 120.674 1091.88 133.438C1091.88 146.203 1087.95 156.611 1080.1 164.662Z" fill="white" fill-opacity="0.03"/>
               </svg>

            </div>
        </div>
        <div className="footer-second-section">
          <div className="row">
            <div className="col-md-6">
              <div className="foot-left">
                <p className="bcbcbc-text ">
                  All screenshots © of their respective owners.
                </p>
                <div className="social-links">
                  <div className="linkedin-svg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 24V15.21C24 10.89 23.07 7.59 18.03 7.59C15.6 7.59 13.98 8.91 13.32 10.17H13.26V7.98H8.49V24H13.47V16.05C13.47 13.95 13.86 11.94 16.44 11.94C18.99 11.94 19.02 14.31 19.02 16.17V23.97H24V24ZM0.39 7.98H5.37V24H0.39V7.98ZM2.88 0C1.29 0 0 1.29 0 2.88C0 4.47 1.29 5.79 2.88 5.79C4.47 5.79 5.76 4.47 5.76 2.88C5.76 1.29 4.47 0 2.88 0Z"
                        fill="#8E8E8E"
                      />
                    </svg>
                  </div>

                  <div className="twitter-svg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_480_5587)">
                        <path
                          d="M14.2339 10.1624L22.9764 0H20.9047L13.3137 8.82384L7.2507 0H0.257812L9.42618 13.3432L0.257812 24H2.3296L10.3459 14.6817L16.7489 24H23.7418L14.2334 10.1624H14.2339ZM11.3963 13.4608L10.4674 12.1321L3.0761 1.55961H6.25825L12.2231 10.0919L13.1521 11.4206L20.9057 22.5113H17.7235L11.3963 13.4613V13.4608Z"
                          fill="#8E8E8E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_480_5587">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="instagram-svg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_480_5592)">
                        <path
                          d="M17.9996 0H5.99985C2.70023 0 0 2.70023 0 5.99985V18.0001C0 21.2989 2.70023 24 5.99985 24H17.9996C21.2992 24 23.9994 21.2989 23.9994 18.0001V5.99985C23.9994 2.70023 21.2992 0 17.9996 0ZM21.9994 18.0001C21.9994 20.2051 20.2057 22 17.9996 22H5.99985C3.79461 22 2.00005 20.2051 2.00005 18.0001V5.99985C2.00005 3.79432 3.79461 2.00005 5.99985 2.00005H17.9996C20.2057 2.00005 21.9994 3.79432 21.9994 5.99985V18.0001Z"
                          fill="#8E8E8E"
                        />
                        <path
                          d="M18.5 6.99993C19.3284 6.99993 19.9999 6.32837 19.9999 5.49996C19.9999 4.67156 19.3284 4 18.5 4C17.6716 4 17 4.67156 17 5.49996C17 6.32837 17.6716 6.99993 18.5 6.99993Z"
                          fill="#8E8E8E"
                        />
                        <path
                          d="M11.9999 6C8.68552 6 6 8.68581 6 11.9999C6 15.3127 8.68552 18.0003 11.9999 18.0003C15.3132 18.0003 17.9997 15.3127 17.9997 11.9999C17.9997 8.68581 15.3132 6 11.9999 6ZM11.9999 16.0002C9.79098 16.0002 8.00005 14.2093 8.00005 11.9999C8.00005 9.7904 9.79098 8.00005 11.9999 8.00005C14.2087 8.00005 15.9997 9.7904 15.9997 11.9999C15.9997 14.2093 14.2087 16.0002 11.9999 16.0002Z"
                          fill="#8E8E8E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_480_5592">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="foot-right">
                <div className="foot-list">
                  <ul>
                    <li>
                      <a className="aeaeae-text" href="">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="aeaeae-text" href="">
                        Read our blog
                      </a>
                    </li>
                    <li>
                      <a className="aeaeae-text" href="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="foot-list">
                  <ul>
                    <li>
                      <a className="aeaeae-text" href="">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="aeaeae-text" href="">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a className="aeaeae-text" href="">
                        Terma & Conditions
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="foot-list">
                  <ul>
                    <li>
                      <a className="aeaeae-text" href="">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="aeaeae-text" href="">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
