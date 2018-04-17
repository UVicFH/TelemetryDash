// Framework
import React, { Component } from "react";
// import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";

class CarVizualization extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carWidth = 260;
        const dataMax = this.props.max;
        const height = this.props.size[1];
        const width = this.props.size[0];
        const barWidth = 30;
        const barHeight = 100;
        const yScale = scaleLinear().domain([0, dataMax]).range([0, barHeight]);
        const marginSide = (width - carWidth)/2;
        console.log(marginSide);
        
        // LF BARCHART
        var borderLF = { x: 0, y: 0, height: yScale(dataMax), width: barWidth}; 
        var valueLF = { x: 0, y: barHeight-yScale(this.props.data), height: yScale(this.props.data), width: barWidth}; 
        const translateLF = 'translate(' + (marginSide-barWidth-10) + ',' + 60 + ')';

        // RF BARCHART
        var borderRF = { x: 0, y: 0, height: yScale(dataMax), width: barWidth}; 
        var valueRF = { x: 0, y: barHeight-yScale(this.props.data), height: yScale(this.props.data), width: barWidth}; 
        const translateRF = 'translate(' + (marginSide+carWidth+10) + ',' + 60 + ')';

        // LB BARCHART
        var borderLB = { x: 0, y: 0, height: yScale(dataMax), width: barWidth}; 
        var valueLB = { x: 0, y: barHeight-yScale(this.props.data), height: yScale(this.props.data), width: barWidth}; 
        const translateLB = 'translate(' + (marginSide-barWidth-10) + ',' + 350 + ')';

        // RB BARCHART
        var borderRB = { x: 0, y: 0, height: yScale(dataMax), width: barWidth}; 
        var valueRB = { x: 0, y: barHeight-yScale(this.props.data), height: yScale(this.props.data), width: barWidth}; 
        const translateRB = 'translate(' + (marginSide+carWidth+10) + ',' + 350 + ')';
        
        // POSITION THE CAR
        const translateCar = 'translate(' + marginSide + ',' + 0 + ')';

        return (
            <div> 
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'>
                    <g  transform={translateLF}>
                        <rect className="outerBar" x={borderLF.x} y={borderLF.y}  width={borderLF.width} height={borderLF.height} />
                        <rect className="innerBar"  x={valueLF.x}  y={valueLF.y} width={valueLF.width} height={valueLF.height} />
                    </g>
                    <g  transform={translateRF}>
                        <rect className="outerBar" x={borderRF.x} y={borderRF.y}  width={borderRF.width} height={borderRF.height} />
                        <rect className="innerBar"  x={valueRF.x}  y={valueRF.y} width={valueRF.width} height={valueRF.height} />
                    </g>                    
                    <g  transform={translateLB}>
                        <rect className="outerBar" x={borderLB.x} y={borderLB.y}  width={borderLB.width} height={borderLB.height} />
                        <rect className="innerBar"  x={valueLB.x}  y={valueLB.y} width={valueLB.width} height={valueLB.height} />
                    </g>
                    <g  transform={translateRB}>
                        <rect className="outerBar" x={borderRB.x} y={borderRB.y}  width={borderRB.width} height={borderRB.height} />
                        <rect className="innerBar"  x={valueRB.x}  y={valueRB.y} width={valueRB.width} height={valueRB.height} />
                    </g>
                    <g className="car" transform={translateCar}>
                        <defs>
                            <rect id="path-1" x="78" y="89" width="107" height="40"></rect>
                            <rect id="path-2" x="117" y="139" width="31" height="16"></rect>
                            <linearGradient x1="50%" y1="5.01434949%" x2="50%" y2="97.8435906%" id="linearGradient-3">
                                <stop stop-color="#646464" offset="0%"></stop>
                                <stop stop-color="#484848" offset="21.8371333%"></stop>
                                <stop stop-color="#222222" offset="83.46022%"></stop>
                                <stop stop-color="#4E4E4E" offset="100%"></stop>
                            </linearGradient>
                            <path d="M10.1291325,63.6548268 C8.13008632,64.241219 7.76549577,68.4915584 7.29975772,71.7884094 C5.72853717,82.9107131 6.16800781,95.8748392 6.16800781,107.227591 C6.16800781,118.815084 5.03625789,139.180951 6.16800781,143.828712 C7.29975772,148.476474 6.73388276,149.057444 10.1291325,150.800355 C13.5243822,152.543265 34.6854094,151.498442 36.7252554,150.800355 C38.7651015,150.102268 38.8176153,144.218335 38.9887553,140.923861 C39.1028485,138.727546 39.1028485,127.495456 38.9887553,107.227591 C39.3754693,93.3696625 39.3754693,82.7185424 38.9887553,75.2742305 C38.6020412,67.8299186 37.2816663,63.9567841 35.0276306,63.6548268 C19.7613293,63.2638987 11.4618299,63.2638987 10.1291325,63.6548268 Z" id="path-4"></path>
                            <path d="M249.784274,63.6548268 C251.783321,64.241219 252.147911,68.4915584 252.613649,71.7884094 C254.18487,82.9107131 253.745399,95.8748392 253.745399,107.227591 C253.745399,118.815084 253.46956,135.69513 252.613649,143.828712 C252.043042,149.251101 251.099917,151.574982 249.784274,150.800355 C233.413423,151.265746 224.548049,151.265746 223.188151,150.800355 C221.148305,150.102268 221.095792,144.218335 220.924652,140.923861 C220.810558,138.727546 220.810558,127.495456 220.924652,107.227591 C220.537938,93.3696625 220.537938,82.7185424 220.924652,75.2742305 C221.311366,67.8299186 222.631741,63.9567841 224.885776,63.6548268 C240.152078,63.2638987 248.451577,63.2638987 249.784274,63.6548268 Z" id="path-5"></path>
                            <path d="M15.8705813,351.816039 C13.586641,352.402431 13.1700908,356.65277 12.637978,359.949621 C10.8428349,371.071925 11.3449367,384.036051 11.3449367,395.388803 C11.3449367,406.976296 11.7515738,427.342163 12.637978,431.989924 C13.5243822,436.637686 13.5243822,436.056716 15.8705813,438.961566 C18.2167804,441.866417 43.9511829,439.652259 46.2570519,438.961566 C48.5629209,438.270874 48.6476046,432.379547 48.8431345,429.085073 C48.9734878,426.888758 48.9734878,415.656668 48.8431345,395.388803 C49.2849611,381.530874 49.2849611,370.879754 48.8431345,363.435442 C48.4013079,355.99113 46.8927598,352.117996 44.31749,351.816039 C26.8755111,351.425111 17.3932082,351.425111 15.8705813,351.816039 Z" id="path-6"></path>
                            <path d="M243.269614,351.816039 C245.939653,352.50156 247.019156,356.65277 247.551268,359.949621 C249.346411,371.071925 248.84431,384.036051 248.84431,395.388803 C248.84431,406.976296 248.84431,429.085073 248.362489,432.570894 C247.880668,436.056716 247.551268,436.637686 244.318665,438.961566 C241.086062,441.285447 216.261919,439.659405 213.932194,438.961566 C211.60247,438.263728 211.541642,432.379547 211.346112,429.085073 C211.215759,426.888758 211.215759,415.656668 211.346112,395.388803 C210.904285,381.530874 210.904285,370.879754 211.346112,363.435442 C211.787938,355.99113 213.296487,352.117996 215.871756,351.816039 C232.356969,351.359024 241.489589,351.359024 243.269614,351.816039 Z" id="path-7"></path>
                            <path d="M113.881692,162.957044 L131.5,162 L149.118308,162.957044 L149.118308,162.957044 C151.856195,163.105769 154,165.369187 154,168.111111 L154,168.111111 L154,168.111111 C154,170.81117 151.81117,173 149.111111,173 L113.888889,173 L113.888889,173 C111.18883,173 109,170.81117 109,168.111111 L109,168.111111 L109,168.111111 C109,165.369187 111.143805,163.105769 113.881692,162.957044 Z" id="path-8"></path>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Rectangle">
                                <use fill="#EFEFEF" fill-rule="evenodd" href="#path-1"></use>
                                <rect stroke="#353435" stroke-width="3" x="79.5" y="90.5" width="104" height="37"></rect>
                            </g>
                            <path d="M47.5,88.5185185 L47.5,116" id="Path-3" stroke="#262626" stroke-width="5"></path>
                            <path d="M215.5,88.5185185 L215.5,116" id="Path-3" stroke="#262626" stroke-width="5"></path>
                            <polyline id="Path-7" stroke="#979797" stroke-width="3" points="35 99 131.916914 68 226 99"></polyline>
                            <polygon id="Path-2" stroke="#454545" stroke-width="6" points="39 102.634146 85.4582043 88 178.941176 88 222 102.634146 222 114.341463 178.941176 128.97561 171.575851 136 96.2229102 136 84.3250774 128.97561 39 114.341463"></polygon>
                            <path d="M86.7152778,122.714286 L46,107.571429" id="Path-3" stroke="#454545" stroke-width="5"></path>
                            <path d="M175.081682,120.88039 L215.258804,106.937106 L175.081682,120.88039 Z" id="Path-3" stroke="#454545" stroke-width="5"></path>
                            <polygon id="Path-4" stroke="#454545" stroke-width="7" points="45.7792547 390.741041 74.0730025 376.797757 187.813869 376.797757 215.541742 390.741041 215.541742 397.139326 215.541742 404.684326 187.813869 416.884699 74.0730025 416.884699 45.7792547 404.684326 45.7792547 397.131713"></polygon>
                            <path d="M45,398 L215,398" id="Path-5" stroke="#454545" stroke-width="6"></path>
                            <polygon id="Path-6" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" points="103.098131 5 85.5700935 89.2440393 85.5700935 133.145863 72 285.02244 74.8271028 428 186.214953 428 193 285.02244 177.168224 133.145863 177.168224 89.2440393 161.336449 5"></polygon>
                            <polygon id="Path-6" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" points="106.271028 5 90.3364486 90.6381487 90.3364486 135.26648 78 289.656381 80.5700935 435 181.831776 435 188 289.656381 173.607477 135.26648 173.607477 90.6381487 159.214953 5"></polygon>
                            <polyline id="Path" stroke="#454545" stroke-width="5" fill="#FFFFFF" points="110 138 132.285714 159 154 138"></polyline>
                            <polyline id="Path-12" stroke="#4A4A4A" stroke-width="2" opacity="0.356487772" points="122 5 104 91.4705882 104 135"></polyline>
                            <polyline id="Path-12" stroke="#4A4A4A" stroke-width="2" opacity="0.356487772" transform="translate(150.000000, 70.000000) scale(-1, 1) translate(-150.000000, -70.000000) " points="159 6 141 91.1402715 141 134"></polyline>
                            <polyline id="Path-12" stroke="#4A4A4A" stroke-width="2" opacity="0.1328125" points="125 300 104 378.556034 104 435"></polyline>
                            <polyline id="Path-12" stroke="#4A4A4A" stroke-width="2" opacity="0.1328125" transform="translate(153.500000, 368.500000) scale(-1, 1) translate(-153.500000, -368.500000) " points="164 301 143 379.556034 143 436"></polyline>
                            <path d="M100,23 L165.715517,23" id="Line" stroke="#4A4A4A" stroke-width="2" stroke-linecap="square"></path>
                            <path d="M100,20 L163,20" id="Line" stroke-opacity="0.559499547" stroke="#4A4A4A" stroke-width="2" stroke-linecap="square"></path>
                            <path d="M100.284404,21.5 L161.715596,21.5" id="Line" stroke="#FFFFFF" stroke-width="3" stroke-linecap="square"></path>
                            <path d="M167,139 L186.722222,288.708171" id="Path-9" stroke="#4A4A4A" stroke-width="2"></path>
                            <path d="M98,138 L78,288" id="Path-9" stroke="#4A4A4A" stroke-width="2"></path>
                            <polyline id="Path-8" stroke="#4A4A4A" stroke-width="7" points="84 130 94.1595092 137 167.533742 137 176 130"></polyline>
                            <polyline id="Path-8" stroke="#4A4A4A" stroke-width="2" points="84 132 94.1595092 139 167.533742 139 176 132"></polyline>
                            <polyline id="Path-8" stroke="#4A4A4A" stroke-width="2" points="84 128 94.1595092 135 167.533742 135 176 128"></polyline>
                            <polyline id="Path-8" stroke="#FFFFFF" stroke-width="2" points="84 130 94.1595092 137 167.533742 137 176 130"></polyline>
                            <g id="Rectangle-2">
                                <use fill="#4A4A4A" fill-rule="evenodd" href="#path-2"></use>
                                <rect stroke-opacity="0.714221014" stroke="#000000" stroke-width="2" x="118" y="140" width="29" height="14"></rect>
                            </g>
                            <g id="Wheel">
                                <use fill="url(#linearGradient-3)" fill-rule="evenodd" href="#path-4"></use>
                                <path stroke-opacity="0.907750226" stroke="#000000" stroke-width="2" d="M9.8476566,62.6952585 C11.3413467,62.2571055 19.5088453,62.2571055 35.0532294,62.6551545 L35.1604074,62.6636809 C38.1376553,63.0625217 39.5747154,67.2779362 39.9874087,75.2223529 C40.3757586,82.6981548 40.3757586,93.3732462 39.9887394,107.221962 C40.1030756,127.532978 40.1030756,138.749131 39.9874087,140.975739 C39.9786886,141.143602 39.9698702,141.325894 39.9595233,141.549968 C39.9526043,141.699807 39.9283772,142.236801 39.9247194,142.316899 C39.9102526,142.633695 39.8981812,142.88684 39.8854478,143.136074 C39.8526559,143.777921 39.8181588,144.334891 39.7763936,144.867925 C39.4620461,148.879831 38.8096861,151.143948 37.0490448,151.746484 C33.867011,152.835456 12.8016492,153.296321 9.67245141,151.689985 C8.83837637,151.261823 8.24620868,150.906903 7.77748585,150.543349 C6.72084803,149.723791 6.28250868,148.897047 5.90697081,147.281218 C5.88735801,147.19683 5.4146133,144.961447 5.19639848,144.065303 C4.55250179,141.421011 4.53886659,135.648727 4.88856959,121.913934 C4.90267729,121.36089 4.90267729,121.36089 4.91683616,120.808308 C5.10865835,113.324618 5.16800781,110.42295 5.16800781,107.227591 C5.16800781,105.539025 5.16128872,104.219049 5.13975326,100.989843 C5.10589871,95.9134105 5.1002998,93.5307041 5.12993539,90.6229632 C5.20712729,83.0491625 5.54831125,77.0374388 6.30958907,71.6485307 C6.33406625,71.4752625 6.35939892,71.2913838 6.38956038,71.0688801 C6.40817501,70.9315584 6.47711275,70.4190019 6.4924737,70.3054944 C6.53364774,70.0012447 6.56714297,69.7585406 6.60062773,69.5236137 C7.20450622,65.2868427 7.91854671,63.2611359 9.8476566,62.6952585 Z"></path>
                            </g>
                            <g id="Wheel">
                                <use fill="url(#linearGradient-3)" fill-rule="evenodd" href="#path-5"></use>
                                <path stroke-opacity="0.907750226" stroke="#000000" stroke-width="2" d="M249.56124,151.80708 C233.022079,152.274778 224.40034,152.272134 222.864362,151.746484 C221.103721,151.143948 220.451361,148.879831 220.137013,144.867925 C220.095248,144.334891 220.060751,143.777921 220.027959,143.136074 C220.015226,142.88684 220.003154,142.633695 219.988687,142.316899 C219.98503,142.236801 219.960803,141.699807 219.953884,141.549968 C219.943537,141.325894 219.934718,141.143602 219.925998,140.975739 C219.810331,138.749131 219.810331,127.532978 219.925041,107.255485 C219.537648,93.3732462 219.537648,82.6981548 219.925998,75.2223529 C220.338691,67.2779362 221.775752,63.0625217 224.753,62.6636809 L224.860177,62.6551545 C240.404562,62.2571055 248.57206,62.2571055 250.06575,62.6952585 C251.99486,63.2611359 252.708901,65.2868427 253.312779,69.5236137 C253.346264,69.7585406 253.379759,70.0012447 253.420933,70.3054944 C253.436294,70.4190019 253.505232,70.9315584 253.523847,71.0688801 C253.554008,71.2913838 253.579341,71.4752625 253.603818,71.6485307 C254.365096,77.0374388 254.70628,83.0491625 254.783472,90.6229632 C254.813107,93.5307041 254.807508,95.9134105 254.773654,100.989843 C254.752118,104.219049 254.745399,105.539025 254.745399,107.227591 C254.745399,122.04974 254.356638,136.820681 253.608158,143.933366 C253.313808,146.730524 252.920152,148.744994 252.404949,150.014466 C251.784396,151.543522 250.76256,152.324238 249.56124,151.80708 Z"></path>
                            </g>
                            <g id="Wheel">
                                <use fill="url(#linearGradient-3)" fill-rule="evenodd" href="#path-6"></use>
                                <path stroke-opacity="0.907750226" stroke="#000000" stroke-width="2" d="M15.621901,350.847453 C17.2874395,350.419833 26.6512474,350.419833 44.4339448,350.822843 C47.7149459,351.207549 49.3716004,355.46094 49.8413779,363.376196 C50.2853385,370.856464 50.2853385,381.534974 49.8431138,395.382371 C49.973784,415.699509 49.973784,426.913416 49.8413779,429.14432 C49.8328858,429.287403 49.8241967,429.442224 49.8142991,429.625532 C49.8056355,429.785986 49.7753181,430.36222 49.7727546,430.410432 C49.7553353,430.738048 49.7409548,430.997238 49.7257269,431.25343 C49.6862749,431.91716 49.6447575,432.492673 49.5943647,433.04374 C49.2298219,437.030176 48.4684255,439.343076 46.5439927,439.919515 C45.1072037,440.349886 37.5703225,441.054566 31.1183631,441.309118 C22.1187427,441.664183 16.454986,441.276637 15.0926366,439.589899 C14.888777,439.337499 14.6949413,439.101744 14.4651473,438.825548 C14.4423791,438.798182 14.0494467,438.327328 13.9478359,438.204425 C13.5681912,437.745227 13.3403759,437.449172 13.137159,437.137994 C12.7477443,436.541698 12.4992747,435.948142 12.2670201,435.068904 C12.0999388,434.43639 11.9423965,433.680615 11.6556829,432.177264 C10.8709595,428.062655 10.3449367,410.4323 10.3449367,395.388803 C10.3449367,393.700666 10.3372612,392.380885 10.3126591,389.152005 C10.2739737,384.074781 10.2675754,381.691524 10.3014469,378.782723 C10.3897045,371.203365 10.7798744,365.186058 11.650754,359.790283 C11.6786747,359.617293 11.707581,359.433647 11.7420059,359.211369 C11.7632599,359.074135 11.8420193,358.561598 11.8595814,358.448013 C11.9066673,358.143479 11.9449815,357.900487 11.9832964,357.665204 C12.6682147,353.459271 13.500734,351.392054 15.621901,350.847453 Z"></path>
                            </g>
                            <g id="Wheel">
                                <use fill="url(#linearGradient-3)" fill-rule="evenodd" href="#path-7"></use>
                                <path stroke-opacity="0.907750226" stroke="#000000" stroke-width="2" d="M243.518295,350.847453 C246.333966,351.570365 247.726991,354.762405 248.538492,359.790283 C249.409372,365.186058 249.799542,371.203365 249.887799,378.782723 C249.921671,381.691524 249.915273,384.074781 249.876587,389.152005 C249.851985,392.380885 249.84431,393.700666 249.84431,395.388803 C249.84431,402.350479 249.840192,406.137381 249.821632,410.684793 C249.771492,422.970032 249.632809,430.684 249.353071,432.707816 C248.827893,436.507317 248.320392,437.316356 244.902375,439.773529 C241.939507,441.9035 217.905663,441.195664 213.645254,439.919515 C211.70748,439.33908 210.946647,437.027874 210.58942,433.040306 C210.541493,432.505317 210.501928,431.946566 210.464331,431.302868 C210.449743,431.05312 210.435919,430.799544 210.41935,430.482171 C210.41521,430.402871 210.387456,429.864832 210.37953,429.714713 C210.367784,429.492245 210.357766,429.311083 210.347868,429.14432 C210.215462,426.913416 210.215462,415.699509 210.34662,395.420669 C209.903908,381.534974 209.903908,370.856464 210.347868,363.376196 C210.817646,355.46094 212.4743,351.207549 215.844044,350.816423 C232.53428,350.353725 241.595271,350.353725 243.518295,350.847453 Z"></path>
                            </g>
                            <polygon id="Path-10" stroke="#3B3B3B" fill="#FFFFFF" points="109.920896 293.459921 78.259832 378.140038 73.3558793 376.665663 105.315632 291.186676"></polygon>
                            <polygon id="Path-10" stroke="#3B3B3B" fill="#FFFFFF" points="157.029099 294.665756 183.852744 379.121637 188.452743 377.455096 162.501934 291.97611"></polygon>
                            <polygon id="Path-10" stroke="#3B3B3B" fill="#FFFFFF" points="188.406439 379.795579 74.1004398 379.795579 73.5612606 374.566847 188.945619 374.566847"></polygon>
                            <path d="" id="Path-13" stroke="#979797"></path>
                            <polygon id="Path-10" stroke="#3B3B3B" fill="#FFFFFF" points="72.3753777 278.613795 192.340868 278.613795 192.906743 283.261557 71.8095027 283.261557"></polygon>
                            <path d="M72.3753777,278.613795 L108.591375,293.13805 C112.953227,294.726804 116.272276,295.747107 118.548523,296.19896 C121.926664,296.869548 125.398114,297.204841 128.962873,297.204841 C139.714497,297.204841 133.930824,297.204841 139.714497,297.204841 C147.77653,297.204841 154.378404,295.849244 159.520121,293.13805 L192.340868,278.613795 L192.906743,283.261557 L159.520121,297.204841 C155.19717,299.528722 150.29292,300.690662 144.807372,300.690662 C141.193054,300.690662 130.373598,301.699512 121.040624,300.690662 C117.819334,300.342456 113.669584,299.180516 108.591375,297.204841 L71.8095027,283.261557 L72.3753777,278.613795 Z" id="Path-10" stroke="#3B3B3B" fill="#FFFFFF"></path>
                            <path d="M101.235,155.448116 C105.38475,158.15931 115.664812,159.514907 132.075186,159.514907 C148.485559,159.514907 158.576996,158.15931 162.349496,155.448116 C168.762745,174.039162 169.70587,190.11267 165.17887,203.668641 C160.651871,217.224612 165.367495,227.875733 179.325744,235.622002 C178.948494,261.959317 177.816744,276.096258 175.930495,278.032825 C173.10112,280.937676 157.092925,278.582526 151.031997,280.937676 C152.729621,292.55708 140.020931,292.55708 134.621623,292.55708 C128.282874,292.55708 114.250124,292.55708 115.947749,280.937676 C110.660554,278.843355 95.0103759,280.356706 90.4833763,278.032825 C87.4653765,276.483571 85.5791266,262.34663 84.8246267,235.622002 C97.6511257,227.101106 102.36675,216.449986 98.9715006,203.668641 C95.5762509,190.887297 96.3307508,174.813789 101.235,155.448116 Z" id="Path-11" stroke="#404040" stroke-width="2" fill="#FFFFFF"></path>
                            <path d="M165,139 L183.712121,276.710084" id="Path-9" stroke="#FFFFFF" stroke-width="4"></path>
                            <path d="M164,139 L183,278" id="Path-9" stroke="#4A4A4A" stroke-width="2"></path>
                            <path d="M100.669125,138.019011 L81.9952519,278.613795" id="Path-9" stroke="#4A4A4A" stroke-width="2"></path>
                            <path d="M98.9715006,138.019011 L80.297627,276.870885" id="Path-9" stroke="#FFFFFF" stroke-width="4"></path>
                            <path d="M163.764183,214.41659 L100.952063,214.41659 L163.764183,214.41659 Z" id="Path-14" stroke="#979797" opacity="0.127038043"></path>
                            <path d="M120,221 C116.666667,231.661608 115,239.661608 115,245 C115,250.338392 116.666667,258.338392 120,269" id="Path-14" stroke="#979797" opacity="0.406929348"></path>
                            <path d="M152,221 C148.666667,231.661608 147,239.661608 147,245 C147,250.338392 148.666667,258.338392 152,269" id="Path-14" stroke="#979797" opacity="0.406929348" transform="translate(149.500000, 245.000000) rotate(-180.000000) translate(-149.500000, -245.000000) "></path>
                            <path d="M135.240758,155.407394 C132.14199,164.699288 130.592606,171.671516 130.592606,176.324076 C130.592606,180.976636 132.14199,187.948863 135.240758,197.240758" id="Path-14" stroke="#979797" opacity="0.406929348" transform="translate(132.916682, 176.324076) rotate(-270.000000) translate(-132.916682, -176.324076) "></path>
                            <polygon id="Triangle" stroke="#454545" fill="#454545" points="132 156 139 162 125 162"></polygon>
                            <g id="Rectangle-3">
                                <use fill="#FFFFFF" fill-rule="evenodd" href="#path-8"></use>
                                <path stroke="#343333" stroke-width="2" d="M131.5,163.001474 L113.935933,163.955572 C111.728473,164.075483 110,165.900397 110,168.111111 C110,170.258885 111.741115,172 113.888889,172 L149.111111,172 C151.258885,172 153,170.258885 153,168.111111 C153,165.900397 151.271527,164.075483 149.064067,163.955572 L131.5,163.001474 Z"></path>
                            </g>
                            <ellipse id="Oval" stroke="#343333" stroke-width="2" fill="#FFFFFF" cx="132" cy="169.5" rx="21" ry="2.5"></ellipse>
                            <path d="M128.962873,297.229773 C133.854174,297.206032 133.930824,297.20566 139.714497,297.177588 C144.346182,297.155107 148.495932,296.339938 152.163746,294.708658 L152.163746,301.987488 C149.840288,302.886042 147.388163,303.315918 144.807372,303.285644 C141.193054,303.243246 130.373598,304.821968 121.040624,303.006848 C119.251997,302.669217 117.177123,302.415905 114.815999,301.271633 C114.061499,295.461931 114.061499,292.944393 114.815999,293.71902 C115.947749,294.880961 124.071573,297.253514 128.962873,297.229773 Z" id="Combined-Shape" stroke="#3B3B3B" fill="#F8F8F8"></path>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

export default CarVizualization;