;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-delete" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M415.074484 399.089417l31.927153 0 0 335.235111-31.927153 0 0-335.235111Z"  ></path>'+
      ''+
      '<path d="M574.71025 399.089417l31.927153 0 0 335.235111-31.927153 0 0-335.235111Z"  ></path>'+
      ''+
      '<path d="M686.455287 239.45365l0-95.78146c0-17.631566-14.295588-31.927153-31.927153-31.927153l-287.344381 0c-17.631566 0-31.927153 14.295588-31.927153 31.927153l0 95.78146-207.526497 0 0 47.89073 95.78146 0 0 558.725184c0 35.263132 28.591175 63.854307 63.854307 63.854307l446.980147 0c35.263132 0 63.854307-28.591175 63.854307-63.854307l0-558.725184 95.78146 0 0-47.89073L686.455287 239.45365zM383.14733 175.599344c0-8.823969 7.139607-15.963577 15.963577-15.963577l223.490074 0c8.822946 0 15.963577 7.139607 15.963577 15.963577l0 63.854307-255.417227 0L383.14733 175.599344zM750.309594 830.105988c0 17.631566-14.295588 31.927153-31.927153 31.927153l-415.052994 0c-17.631566 0-31.927153-14.295588-31.927153-31.927153l0-542.761608 478.907301 0L750.309594 830.105988z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M331.162352 847.656713 889.919259 288.923342c12.44852-12.45466 12.44852-32.69054 0-45.146223l-67.744917-67.734684-67.713194-67.720358c-12.471033-12.472056-32.69054-12.472056-45.170782 0L150.441361 667.186432c-3.585665 2.915399-6.359848 6.898107-7.786337 11.659551L80.811514 884.612393c-2.619664 8.745175-0.024559 17.810644 6.002714 23.843034l1.676176 1.302669 1.300622 1.674129c6.03239 6.02625 15.09786 8.622378 23.845081 6.009877l205.77255-61.850673C324.226383 854.142427 328.231603 851.303776 331.162352 847.656713zM743.159754 164.754345l45.584198 45.584198 44.719504 44.725644c6.243191 6.237051 6.243191 16.35448 0 22.574135l-79.000262 78.999239L641.578194 243.754606l79.000262-79.000262C726.82267 158.518317 736.924749 158.518317 743.159754 164.754345zM138.203642 860.042811l48.523133-161.420413 432.271144-432.279331 112.882953 112.882953L299.578006 811.536051 138.203642 860.042811z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-plus" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M433.621333 945.934222c-22.812444-22.812444-35.384889-53.191111-35.384889-85.489778L398.236444 625.777778 163.555556 625.763556C131.256889 625.777778 100.906667 613.205333 78.065778 590.364444c-22.826667-22.826667-35.384889-53.176889-35.384889-85.475556C42.666667 472.604444 55.239111 442.24 78.065778 419.399111c22.840889-22.826667 53.191111-35.399111 85.504-35.384889L398.222222 384l0.014222-220.444444C398.222222 131.271111 410.794667 100.906667 433.621333 78.065778S486.826667 42.666667 519.111111 42.680889c32.284444 0 62.634667 12.558222 85.489778 35.399111 22.826667 22.826667 35.399111 53.191111 35.384889 85.489778L640 384.014222l220.444444 0c32.298667 0 62.634667 12.558222 85.489778 35.399111 22.840889 22.826667 35.413333 53.205333 35.384889 85.475556 0.014222 32.284444-12.558222 62.648889-35.384889 85.489778S892.728889 625.777778 860.444444 625.763556L640 625.792 639.985778 860.444444c0.014222 32.298667-12.558222 62.634667-35.384889 85.489778C581.76 968.760889 551.395556 981.333333 519.111111 981.319111 486.840889 981.347556 456.476444 968.775111 433.621333 945.934222zM446.791111 577.223111C451.925333 582.371556 455.111111 589.468444 455.111111 597.333333l0.014222 263.111111c0 17.123556 6.656 33.180444 18.730667 45.269333C485.959111 917.802667 502.016 924.444444 519.111111 924.444444c17.109333 0 33.166222-6.670222 45.255111-18.730667 12.103111-12.103111 18.759111-28.145778 18.730667-45.255111l0.028444-263.111111c0-15.701333 12.728889-28.444444 28.444444-28.444444L860.444444 568.888889c17.123556 0 33.166222-6.656 45.255111-18.730667C917.788444 538.055111 924.444444 522.012444 924.444444 504.888889c0-17.095111-6.670222-33.166222-18.744889-45.255111-12.074667-12.088889-28.145778-18.744889-45.226667-18.716444L611.555556 440.888889c-15.701333 0-28.444444-12.728889-28.444444-28.430222L583.096889 163.555556c0.014222-17.095111-6.656-33.166222-18.716444-45.255111-12.103111-12.088889-28.16-18.744889-45.255111-18.730667-17.109333 0-33.180444 6.641778-45.283556 18.730667-12.088889 12.088889-18.716444 28.145778-18.730667 45.255111L455.111111 412.444444c0 15.701333-12.743111 28.444444-28.444444 28.444444l-263.111111 0.014222c-17.095111 0-33.166222 6.641778-45.269333 18.730667C106.225778 471.708444 99.569778 487.793778 99.555556 504.888889c0 17.109333 6.670222 33.166222 18.730667 45.255111 12.103111 12.103111 28.16 18.744889 45.269333 18.730667L426.666667 568.903111C434.531556 568.903111 441.642667 572.088889 446.791111 577.223111z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-boy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M577.409893 676.405559c0 14.45927-29.307476 26.218866-65.409893 26.218866-36.148175 0-65.409893-11.759596-65.409893-26.218866 0-14.527906 29.261719-26.195987 65.409893-26.195987C548.102417 650.23245 577.409893 661.900532 577.409893 676.405559zM1000.572322 647.487019c0 66.91988-42.050851 123.727423-99.773538 142.78529-74.126637 142.007418-223.02051 233.727691-388.135305 233.727691-164.977524 0-313.642611-91.468609-387.769248-233.178605-58.63783-18.508781-101.489432-75.773895-101.489432-143.334376 0-37.20059 13.040797-71.198177 34.500916-97.417043-22.924349-46.397784-33.471379-100.002324-30.039591-157.381831C33.402744 300.19 74.378301 209.064569 143.197104 136.058984c79.503106-84.30761 185.316591-132.650074 290.283569-132.650074 49.326243 0 95.083426 10.684302 135.395505 31.114884 24.0454-16.975915 50.859109-31.938514 73.371643-34.455159 3.706332-0.388936 7.366906 1.006658 9.837794 3.774968 2.470888 2.76831 3.431789 6.566156 2.585281 10.180973-5.19344 22.466777-9.837794 49.532151-12.560347 75.316323 7.023728 7.321149 13.589883 14.93972 19.65271 22.924349 1.075294-0.48045 2.013316-1.121051 3.134367-1.578623 20.95679-8.922651 43.37781-13.452612 66.668216-13.452612 93.89374 0 187.810358 72.433621 233.659055 180.214666 40.220564 94.465704 33.837437 194.033335-8.716743 262.028509C983.642165 566.725591 1000.572322 605.001475 1000.572322 647.487019zM288.933733 537.646901c0 16.861522 0 40.037535 87.007284 40.037535 52.30046 0 87.007284-24.136914 87.007284-40.037535 0-15.946378-34.706823-40.037535-87.007284-40.037535C288.933733 497.609366 288.933733 512.686358 288.933733 537.646901zM909.057956 647.487019c0-18.096966-7.321149-34.020466-18.623174-44.704768-2.10483-1.990437-4.346932-3.797846-6.749185-5.399348-0.274543-0.16015-0.503329-0.297422-0.754994-0.457572-2.196345-1.441351-4.39269-2.653917-6.794942-3.706332-0.983779-0.434693-2.059073-0.732115-3.08861-1.098172-1.738773-0.640601-3.523303-1.349837-5.35359-1.715894-3.08861-0.640601-6.200098-1.052415-9.357344-1.075294-7.8016 13.292462-16.678493 26.127352-26.836588 38.275884 9.471737-32.396086 14.642299-65.707315 14.642299-98.76688 0-1.166808-0.183029-2.242102-0.183029-3.340274-75.796774-62.664462-118.305197-153.606864-135.509898-198.311631-50.493052 91.788909-129.6301 106.293936-174.495018 106.293936-25.784173 0-43.354931-4.644354-44.064167-4.827383-3.500425-0.960901-6.314491-3.477546-7.664328-6.863577-1.349837-3.363153-0.983779-7.183878 0.938022-10.249609 12.880647-20.63649 10.638545-36.537111 5.971312-46.695205-16.907279 24.0454-52.666518 46.008848-95.197819 65.158229 50.493052 4.346932 92.772689 24.891908 116.085973 54.290898 26.31038-33.196836 76.803432-55.251799 136.058984-55.251799 112.013584 0 155.643058 30.474284 155.643058 108.67331 0 108.67331-117.11551 108.67331-155.643058 108.67331-59.255552 0-109.748604-22.032084-136.058984-55.251799-26.31038 33.196836-76.803432 55.251799-136.058984 55.251799-38.50467 0-155.643058 0-155.643058-108.67331 0-20.064525 2.92846-36.948925 9.059922-51.019259-18.600295 4.987533-35.57621 9.220072-49.921087 12.628983-0.938022 9.631887-1.555744 19.469681-1.555744 29.55914 0 33.059565 5.19344 66.370794 14.61942 98.76688C182.433889 615.434112 173.48836 602.64498 165.709639 589.352518c-3.203003 0-6.268734 0.434693-9.311587 1.075294-1.075294 0.228786-2.10483 0.594843-3.180124 0.892265-1.853166 0.549086-3.683453 1.166808-5.467983 1.94468-1.281201 0.571965-2.516645 1.189687-3.752089 1.853166-1.372715 0.732115-2.608159 1.555744-3.889361 2.379374C138.690022 598.458197 137.271549 599.373341 135.921712 600.517271c-0.549086 0.48045-1.121051 1.075294-1.670137 1.555744-7.710085 7.138121-13.612762 16.655615-16.678493 27.61446-1.555744 5.628134-2.631038 11.507932-2.631038 17.730908 0 32.098664 22.626927 58.111623 50.859109 58.111623 7.069485 0 13.772912-1.62438 19.835739-4.529961 46.123241 134.50324 174.952589 231.416953 327.049466 231.416953 151.959605 0 280.69744-96.753564 326.957952-230.98226 5.719648 2.539524 11.965503 4.095268 18.577416 4.095268C886.40815 705.598642 909.057956 679.562804 909.057956 647.487019zM648.058984 577.684436c87.007284 0 87.007284-23.176013 87.007284-40.037535 0-24.960543 0-40.037535-87.007284-40.037535-52.277582 0-87.007284 24.091157-87.007284 40.037535C561.074579 553.547522 595.781402 577.684436 648.058984 577.684436z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M698.996928 408.395364 589.489862 408.395364l-77.486792 114.152876-77.494978-114.152876L325.003072 408.395364l131.255393 196.252733L308.159452 822.813908l203.840548 0 0-74.122161-40.596604 0 40.596604-60.7015 90.165556 134.823662 113.677039 0-148.103106-218.165812L698.996928 408.395364 698.996928 408.395364z"  ></path>'+
      ''+
      '<path d="M840.463893 282.998399c-17.977443-24.518417-43.039235-53.178153-70.563102-80.70202-27.522844-27.522844-56.18258-52.582589-80.70202-70.563102-41.744753-30.612205-61.993936-34.151821-73.595158-34.151821L214.136032 97.581456c-35.7052 0-64.75277 29.048593-64.75277 64.75277l0 699.331549c0 35.7052 29.046546 64.75277 64.75277 64.75277l595.726913 0c35.7052 0 64.75277-29.048593 64.75277-64.75277l0-505.07324C874.615715 344.992335 871.077122 324.742129 840.463893 282.998399L840.463893 282.998399zM733.271546 238.925624c24.848944 24.848944 44.35623 47.267537 58.746986 65.865103L667.406442 304.790728 667.406442 180.184779C686.009126 194.576557 708.425671 214.081797 733.271546 238.925624L733.271546 238.925624 733.271546 238.925624zM822.813908 861.665775c0 7.018857-5.931083 12.950963-12.950963 12.950963L214.136032 874.616738c-7.018857 0-12.950963-5.931083-12.950963-12.950963L201.185069 162.334225c0-7.018857 5.931083-12.950963 12.950963-12.950963L615.604636 149.383262l0 181.308369c0 14.303774 11.594059 25.900903 25.900903 25.900903L822.813908 356.592534 822.813908 861.665775z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-filter" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M589.28 1015.466c-26.995 0-44.217-17.798-55.623-29.568l-4.377-4.454c-14.592-14.477-29.069-29.108-43.565-43.718-27.859-28.089-56.678-57.158-85.651-84.768-24.423-23.251-35.558-50.515-35.040-85.766 0.576-39.783 0.499-79.603 0.423-119.386-0.057-41.856-0.134-83.731 0.518-125.568 0.231-13.689-3.149-21.485-13.901-32.064-63.744-62.842-126.989-126.183-190.252-189.523l-78.086-78.144c-16.531-16.493-44.813-44.678-25.306-87.398 18.874-41.242 58.56-41.242 77.626-41.242h2.169c61.229 0.115 122.457 0.134 183.706 0.134l387.783 0.019c58.752 0 117.485-0.038 176.217-0.154h2.151c19.085 0 58.809 0 77.587 41.491 19.277 42.663-8.871 70.694-24 85.748l-78.528 78.566c-63.609 63.686-127.219 127.411-191.328 190.579-10.406 10.252-13.882 18.412-13.766 32.391 0.672 90.643 0.634 181.248 0.576 271.872-0.019 44.409-0.038 88.819 0 133.248 0.038 24.326 0.096 64.608-44.122 82.541-8.448 3.417-16.915 5.165-25.209 5.165zM136.045 154.020c-20.122 0-20.947 1.786-22.925 6.125-1.075 2.343-1.094 3.36-1.094 3.36 0.595 2.88 8.256 10.503 12.826 15.072l79.526 79.546c63.149 63.206 126.278 126.451 189.926 189.197 22.483 22.176 32.314 45.581 31.814 75.897-0.672 41.472-0.576 82.983-0.518 124.454 0.077 40.128 0.154 80.275-0.423 120.403-0.269 18.489 4.166 29.703 16.377 41.337 29.606 28.205 58.714 57.562 86.861 85.958 14.4 14.496 28.781 29.011 43.257 43.411l5.165 5.28c3.725 3.84 9.907 10.214 12.576 11.251 0.308-0.057 1.094-0.192 2.438-0.749 5.107-2.074 6.643-2.707 6.605-26.515-0.057-44.697-0.038-89.146 0-133.594 0.038-90.451 0.096-180.903-0.576-271.373-0.231-30.509 9.543-53.856 31.699-75.686 63.994-63.091 127.488-126.663 190.983-190.252l78.643-78.682c4.531-4.493 12.115-12.057 12.711-14.937v0c0 0-0.019-1.037-1.075-3.398-2.016-4.454-2.784-6.125-22.791-6.125h-2.016c-58.809 0.115-117.562 0.154-176.352 0.154h-387.744c-61.268 0-122.554-0.019-183.821-0.134h-2.074z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dixiaguandao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0 883.2l256 0 0 70.4L0 953.6 0 883.2z"  ></path>'+
      ''+
      '<path d="M192 761.6l64 0 0 192L192 953.6 192 761.6z"  ></path>'+
      ''+
      '<path d="M192 761.6l832 0 0 76.8L192 838.4 192 761.6z"  ></path>'+
      ''+
      '<path d="M377.6 505.6 1024 505.6l0 64L377.6 569.6 377.6 505.6z"  ></path>'+
      ''+
      '<path d="M377.6 505.6l64 0 0 512-64 0L377.6 505.6z"  ></path>'+
      ''+
      '<path d="M646.4 953.6 960 953.6l0 64-313.6 0L646.4 953.6z"  ></path>'+
      ''+
      '<path d="M646.4 704l64 0 0 313.6-64 0L646.4 704z"  ></path>'+
      ''+
      '<path d="M64 640l646.4 0 0 64L64 704 64 640z"  ></path>'+
      ''+
      '<path d="M64 505.6l64 0L128 704 64 704 64 505.6z"  ></path>'+
      ''+
      '<path d="M0 505.6l128 0 0 64L0 569.6 0 505.6z"  ></path>'+
      ''+
      '<path d="M0 384l1024 0 0 64L0 448 0 384z"  ></path>'+
      ''+
      '<path d="M121.6 70.4 121.6 384 256 384 256 262.4l134.4 0L390.4 384 320 384l192 0L512 70.4 121.6 70.4zM256 192 198.4 192 198.4 140.8 256 140.8 256 192zM448 192 390.4 192 390.4 140.8 448 140.8 448 192z"  ></path>'+
      ''+
      '<path d="M646.4 6.4 646.4 384 960 384 960 6.4 646.4 6.4zM768 262.4l-64 0L704 192l64 0L768 262.4zM768 140.8l-64 0 0-64 64 0L768 140.8zM902.4 262.4l-64 0L838.4 192l64 0L902.4 262.4zM902.4 140.8l-64 0 0-64 64 0L902.4 140.8z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-girl" viewBox="0 0 1060 1024">'+
      ''+
      '<path d="M700.084591 562.978399C700.084591 562.978399 649.344371 560.055826 646.77513 617.150831 646.77513 617.150831 647.596848 668.504608 700.084591 671.531093 700.084591 671.531093 749.079114 670.278561 753.59857 617.150831 753.59857 617.150831 746.92256 565.587375 700.084591 562.978399L700.084591 562.978399ZM378.792557 562.978399C378.792557 562.978399 326.100297 567.153502 325.278578 617.150831 325.278578 617.150831 319.013429 668.504608 378.792557 671.531093 378.792557 671.531093 424.089346 675.706195 432.102019 617.150831 432.102019 617.150831 431.280297 569.137141 378.792557 562.978399L378.792557 562.978399ZM512.321854 1000.319576C512.321854 1000.319576 330.308908 1002.457099 23.498563 1002.933439L16.003724 577.067983C16.003724 577.067983-35.25144 61.964105 512.732714 0.799764 512.732714 0.799764 1035.552189-2.540319 1046.952166 537.614181L1046.329023 1004.802726C1046.329023 1004.802726 882.917016 994.578347 512.321854 1000.319576ZM930.987562 527.801757C930.987562 527.801757 568.507332 560.575393 332.571789 375.410476 332.571789 375.410476 200.275069 510.683832 134.537568 529.785397 134.537568 529.785397 112.351161 885.2964 518.280227 936.440489 518.280227 936.440489 888.670872 964.100089 930.987562 532.394372 973.306078 100.480828 930.987562 527.801757 930.987562 527.801757Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-refresh" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M743.291 823.31c-65.589 51.781-144.988 79.397-231.291 79.397-203.674 0-372.827-165.7-372.827-372.827 0-17.26-13.809-31.069-31.069-31.069-17.26 0-31.069 13.809-31.069 31.069 0 238.195 193.317 434.964 434.964 434.964 103.563 0 200.223-37.973 279.62-100.111l79.397 69.042 13.809-234.742-231.291 44.878 89.755 79.397z"  ></path>'+
      ''+
      '<path d="M512 98.369c-103.563 0-200.223 37.973-279.62 100.111l-82.851-69.042-13.809 234.742 231.291-44.878-89.755-79.397c65.589-51.781 144.988-79.397 231.291-79.397 203.674 0 372.827 165.7 372.827 372.827 0 17.26 13.809 31.069 31.069 31.069 17.26 0 31.069-13.809 31.069-31.069 3.452-238.195-193.317-434.964-431.514-434.964z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-view" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.904 198.338c-308.599 0-464.452 313.662-464.452 313.662s152.747 308.508 464.452 308.508c311.707 0 465.073-308.508 465.073-308.508s-156.473-313.662-465.073-313.662zM829.668 638.189c-41.539 41.090-86.533 73.713-133.734 96.969-58.089 28.617-120.006 43.126-184.032 43.126-64.018 0-125.899-14.507-183.917-43.118-47.141-23.246-92.060-55.861-133.506-96.942-50.013-49.569-83.056-99.871-98.703-126.231 15.834-26.756 49.427-78.211 99.969-128.911 41.709-41.841 86.716-75.054 133.774-98.718 57.797-29.061 119.159-43.797 182.385-43.797 63.232 0 124.633 14.74 182.497 43.806 47.116 23.669 92.201 56.891 134.002 98.742 50.606 50.667 84.291 102.082 100.209 128.882-15.705 26.356-48.846 76.641-98.941 126.195z"  ></path>'+
      ''+
      '<path d="M511.904 349.846c-88.132 0-159.578 71.445-159.578 159.578s71.445 159.578 159.578 159.578 159.578-71.445 159.578-159.578-71.445-159.578-159.578-159.578zM511.904 626.775c-64.709 0-117.351-52.645-117.351-117.351s52.645-117.351 117.351-117.351 117.351 52.645 117.351 117.351-52.645 117.351-117.351 117.351z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-word" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M679.929173 89.808213l0.319147 0.325973L860.5696 278.64064l0.162133 0.172373 5.684907 5.9392 0 594.486613c0 35.2256-28.66688 63.885653-63.904427 63.885653L218.955093 943.12448c-35.237547 0-63.904427-28.660053-63.904427-63.885653L155.050667 147.541333C155.050667 112.298667 183.71584 83.626667 218.955093 83.626667L674.013867 83.626667 679.929173 89.808213 679.929173 89.808213zM686.09536 157.253973l0 93.16352c0 11.979093 9.741653 21.715627 21.730987 21.715627l88.147627 0-63.240533-66.121387L686.09536 157.253973 686.09536 157.253973zM824.2432 314.303147l-116.416853 0c-35.242667 0-63.901013-28.665173-63.901013-63.885653L643.925333 125.7984 218.955093 125.7984c-11.984213 0-21.72928 9.7536-21.72928 21.742933l0 731.697493c0 11.96544 9.74336 21.71392 21.72928 21.71392l583.55712 0c11.984213 0 21.730987-9.74848 21.730987-21.71392L824.2432 314.303147 824.2432 314.303147z"  ></path>'+
      ''+
      '<path d="M478.281387 382.737067 560.53248 382.737067 619.021653 650.83904 620.854613 650.83904 675.684693 382.737067 743.318187 382.737067 657.406293 739.561813 576.981333 739.561813 516.66432 467.602773 450.858667 739.561813 368.60416 739.561813 286.347947 382.737067 361.296213 382.737067 412.475733 650.83904 478.281387 382.737067Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)