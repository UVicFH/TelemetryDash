// Framework
import React, { Component } from 'react';
// import styled from 'styled-components';

// D3 imports
import { scaleLinear } from 'd3-scale';

class CarVizualization extends Component {
  render() {
    const CAR_WIDTH = 260;
    const dataMax = this.props.max;
    // const dataMin = this.props.possibleRange[0];
    // const dataMax = this.props.possibleRange[1];
    const height = this.props.size[1];
    const width = this.props.size[0];
    const barWidth = 30;
    const barHeight = 100;
    const yScale = scaleLinear().domain([0, dataMax]).range([0, barHeight]);
    const marginSide = (width - CAR_WIDTH)/2;

    // LF BARCHART
    const borderLF = { x: 0, y: 0, height: yScale(dataMax), width: barWidth};
    const valueLF = {
      x: 0,
      y: barHeight-yScale(this.props.data.brakeTempLF.val),
      height: yScale(this.props.data.brakeTempLF.val),
      width: barWidth,
    };
    const translateLF = `translate(${marginSide-barWidth-10},60)`;

    // RF BARCHART
    const borderRF = { x: 0, y: 0, height: yScale(dataMax), width: barWidth};
    const valueRF = {
      x: 0,
      y: barHeight-yScale(this.props.data.brakeTempRF.val),
      height: yScale(this.props.data.brakeTempRF.val),
      width: barWidth,
    };
    const translateRF = `translate(${marginSide+CAR_WIDTH+10},60)`;

    // LB BARCHART
    const borderLB = { x: 0, y: 0, height: yScale(dataMax), width: barWidth};
    const valueLB = {
      x: 0,
      y: barHeight-yScale(this.props.data.brakeTempLB.val),
      height: yScale(this.props.data.brakeTempLB.val),
      width: barWidth,
    };
    const translateLB = `translate(${marginSide-barWidth-10},350)`;

    // RB BARCHART
    const borderRB = { x: 0, y: 0, height: yScale(dataMax), width: barWidth};
    const valueRB = {
      x: 0,
      y: barHeight-yScale(this.props.data.brakeTempRB.val),
      height: yScale(this.props.data.brakeTempRB.val),
      width: barWidth,
    };
    const translateRB = `translate(${marginSide+CAR_WIDTH+10},350)`;

    // POSITION THE CAR
    const translateCar = `translate(${marginSide},0)`;

    return (
      <div>
        <svg
          ref={node => this.node = node}
          width={this.props.size[0]}
          height={this.props.size[1]}
          className='single-bar'
        >
          <g  transform={translateLF}>
            <rect
              className='outerBar'
              x={borderLF.x + borderLF.width/4}
              y={borderLF.y}
              width={borderLF.width/2}
              height={borderLF.height}
            />
            <rect
              className='innerBar'
              x={valueLF.x}
              y={valueLF.y}
              width={valueLF.width}
              height={valueLF.height}
            />
          </g>
          <g transform={translateRF}>
            <rect
              className='outerBar'
              x={borderRF.x + borderRF.width/4}
              y={borderRF.y}
              width={borderRF.width/2}
              height={borderRF.height}
            />
            <rect
              className='innerBar'
              x={valueRF.x}
              y={valueRF.y}
              width={valueRF.width}
              height={valueRF.height}
            />
          </g>
          <g  transform={translateLB}>
            <rect
              className='outerBar'
              x={borderLB.x + borderLB.width/4}
              y={borderLB.y}
              width={borderLB.width/2}
              height={borderLB.height}
            />
            <rect
              className='innerBar'
              x={valueLB.x}
              y={valueLB.y}
              width={valueLB.width}
              height={valueLB.height}
            />
          </g>
          <g  transform={translateRB}>
            <rect
              className='outerBar'
              x={borderRB.x + borderRB.width/4}
              y={borderRB.y}
              width={borderRB.width/2}
              height={borderRB.height}
            />
            <rect
              className='innerBar'
              x={valueRB.x}
              y={valueRB.y}
              width={valueRB.width}
              height={valueRB.height}
            />
          </g>
          <g className='car' transform={translateCar}>
            <defs>
              <rect id='path-1' x='75.483871' y='89.1129032' width='113.225806' height='41.9354839'></rect>
              <polygon id='path-2' points='99.5967742 139.435484 165.645161 139.435484 185.564516 286.209677 82.8225806 286.209677 93.0831951 196.429301'></polygon>
              <linearGradient x1='50%' y1='5.01434949%' x2='50%' y2='97.8435906%' id='linearGradient-3'>
                <stop stopColor='#2D3B48' offset='0%'></stop>
                <stop stopColor='#111C24' offset='21.8371333%'></stop>
                <stop stopColor='#111C24' offset='79.5141103%'></stop>
                <stop stopColor='#2D3B48' offset='100%'></stop>
              </linearGradient>
              <path d='M255.809169,61.1180791 C257.894369,61.7413342 258.274673,66.2588667 258.760483,69.7629707 C260.39942,81.5844662 259.941009,95.3635683 259.941009,107.429998 C259.941009,119.745927 259.653282,137.687119 258.760483,146.33201 C258.165284,152.095272 257.181513,154.565241 255.809169,153.741918 C238.732771,154.236565 229.485319,154.236565 228.066813,153.741918 C225.939054,152.999946 225.884277,146.746126 225.705761,143.244549 C225.586751,140.910165 225.586751,128.971981 225.705761,107.429998 C225.302381,92.7009062 225.302381,81.3802149 225.705761,73.4679243 C226.109142,65.5556336 227.486422,61.4390186 229.837601,61.1180791 C245.761846,60.7025758 254.419035,60.7025758 255.809169,61.1180791 Z' id='path-4'></path>
              <filter x='-4.3%' y='-1.6%' width='108.7%' height='103.2%' filterUnits='objectBoundingBox' id='filter-5'>
                <feGaussianBlur stdDeviation='0' in='SourceGraphic'></feGaussianBlur>
              </filter>
              <path d='M252.664008,363.053563 C254.749208,363.676818 255.129512,368.194351 255.615322,371.698455 C257.254259,383.51995 256.795848,397.299052 256.795848,409.365482 C256.795848,421.681411 256.50812,439.622603 255.615322,448.267494 C255.020123,454.030755 254.036352,456.500724 252.664008,455.677401 C235.587609,456.172049 226.340157,456.172049 224.921651,455.677401 C222.793893,454.93543 222.739116,448.68161 222.5606,445.180033 C222.441589,442.845648 222.441589,430.907465 222.5606,409.365482 C222.157219,394.63639 222.157219,383.315699 222.5606,375.403408 C222.96398,367.491118 224.341261,363.374502 226.69244,363.053563 C242.616685,362.63806 251.273874,362.63806 252.664008,363.053563 Z' id='path-6'></path>
              <filter x='-4.3%' y='-1.6%' width='108.7%' height='103.2%' filterUnits='objectBoundingBox' id='filter-7'>
                <feGaussianBlur stdDeviation='0' in='SourceGraphic'></feGaussianBlur>
              </filter>
              <path d='M30.405943,63.2148533 C32.4911436,63.8381084 32.8714472,68.3556409 33.3572575,71.8597449 C34.9961941,83.6812404 34.5377833,97.4603424 34.5377833,109.526773 C34.5377833,121.842702 34.2500558,139.783893 33.3572575,148.428785 C32.7620586,154.192046 31.7782871,156.662015 30.405943,155.838692 C13.3295449,156.333339 4.08209285,156.333339 2.66358697,155.838692 C0.535828152,155.09672 0.481051069,148.8429 0.302535394,145.341323 C0.183524943,143.006939 0.183524943,131.068755 0.302535394,109.526773 C-0.100845131,94.7976804 -0.100845131,83.4769891 0.302535394,75.5646985 C0.705915919,67.6524078 2.08319601,63.5357928 4.43437566,63.2148533 C20.3586202,62.79935 29.0158093,62.79935 30.405943,63.2148533 Z' id='path-8'></path>
              <filter x='-4.3%' y='-1.6%' width='108.7%' height='103.2%' filterUnits='objectBoundingBox' id='filter-9'>
                <feGaussianBlur stdDeviation='0' in='SourceGraphic'></feGaussianBlur>
              </filter>
              <path d='M34.5994914,363.053563 C36.684692,363.676818 37.0649956,368.194351 37.5508059,371.698455 C39.1897425,383.51995 38.7313317,397.299052 38.7313317,409.365482 C38.7313317,421.681411 38.4436042,439.622603 37.5508059,448.267494 C36.955607,454.030755 35.9718355,456.500724 34.5994914,455.677401 C17.5230933,456.172049 8.27564124,456.172049 6.85713536,455.677401 C4.72937654,454.93543 4.67459946,448.68161 4.49608378,445.180033 C4.37707333,442.845648 4.37707333,430.907465 4.49608378,409.365482 C4.09270326,394.63639 4.09270326,383.315699 4.49608378,375.403408 C4.89946431,367.491118 6.27674439,363.374502 8.62792404,363.053563 C24.5521686,362.63806 33.2093577,362.63806 34.5994914,363.053563 Z' id='path-10'></path>
              <filter x='-4.3%' y='-1.6%' width='108.7%' height='103.2%' filterUnits='objectBoundingBox' id='filter-11'>
                <feGaussianBlur stdDeviation='0' in='SourceGraphic'></feGaussianBlur>
              </filter>
              <path d='M71.8684052,287.258065 L108.865692,302.130041 C113.321642,303.756831 116.712294,304.801561 119.037647,305.264232 C122.488664,305.950873 126.035004,306.294194 129.676666,306.294194 C140.660235,306.294194 134.75179,306.294194 140.660235,306.294194 C148.89619,306.294194 155.640487,304.906143 160.893126,302.130041 L194.421917,287.258065 L195,292.017097 L160.893126,306.294194 C156.476916,308.67371 151.466867,309.863469 145.862979,309.863469 C142.170689,309.863469 131.117824,310.896471 121.583509,309.863469 C118.292726,309.506926 114.053454,308.317168 108.865692,306.294194 L71.2903226,292.017097 L71.8684052,287.258065 Z' id='path-12'></path>
              <path d='M114.150485,158.267443 L133.145161,157.258065 L152.139838,158.267443 L152.139838,158.267443 C155.009457,158.419935 157.258065,160.791206 157.258065,163.664875 L157.258065,163.664875 L157.258065,163.664875 C157.258065,166.495581 154.963323,168.790323 152.132616,168.790323 L114.157706,168.790323 L114.157706,168.790323 C111.326999,168.790323 109.032258,166.495581 109.032258,163.664875 L109.032258,163.664875 L109.032258,163.664875 C109.032258,160.791206 111.280865,158.419935 114.150485,158.267443 Z' id='path-13'></path>
              <path d='M129.092441,305.648218 C134.367355,305.624053 134.450016,305.623674 140.687289,305.595099 C145.682226,305.572216 150.157431,304.742457 154.112903,303.08198 C156.749885,301.974995 156.749885,304.444698 154.112903,310.491087 C151.607221,311.405724 148.962782,311.843294 146.179586,311.812478 C142.281806,311.769322 130.613806,313.3763 120.548869,311.528692 C118.619964,311.185019 116.820494,310.438947 114.274194,309.274194 C112.991093,304.567248 112.845049,302.167393 113.836062,302.074629 C115.322581,301.935484 123.817527,305.672384 129.092441,305.648218 Z' id='path-14'></path>
            </defs>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Car-Dark-II' transform='translate(2.000000, 1.000000)'>
                <polyline id='Path-3' stroke='#202A34' strokeWidth='3' points='85.9677419 123.709677 56.6772792 113.248798 41.9354839 107.983871'></polyline>
                <path d='M177.177419,122.66129 L219.112903,107.983871 L177.177419,122.66129 Z' id='Path-3' stroke='#202A34' strokeWidth='3'></path>
                <g id='Rectangle'>
                  <use fill='#111C24' fillRule='evenodd' href='#path-1'></use>
                  <rect stroke='#202A34' strokeWidth='3' x='76.983871' y='90.6129032' width='110.225806' height='38.9354839'></rect>
                </g>
                <path d='M43.5080645,89.6734991 L43.5080645,123.169103' id='Path-3' stroke='#2D3B48' strokeWidth='5'></path>
                <path d='M217.540323,89.6740471 L217.540323,122.120187' id='Path-3' stroke='#2D3B48' strokeWidth='5'></path>
                <polyline id='Path-7' stroke='#A3A8A9' strokeWidth='4' points='30.4032258 98.5483871 133.07361 65 232.741935 98.5483871'></polyline>
                <polygon id='Path-2' stroke='#A3A8A9' strokeWidth='4' points='34.5967742 105.503541 83.5691102 90.1612903 182.111006 90.1612903 227.5 105.503541 227.5 117.777341 180.064781 131.048387 174.347099 140.483871 94.9163587 140.483871 82.3746629 133.119591 34.5967742 117.777341'></polygon>
                <path d='M23.0645161,412.016129 L232.741935,412.016129' id='Path-5' stroke='#202A34' strokeWidth='6'></path>
                <polygon id='Path-4' stroke='#A3A8A9' strokeWidth='4' points='32.5 405.634642 65.6989247 391.048387 199.158602 391.048387 231.693548 405.634642 231.693548 412.327973 231.693548 420.220898 199.158602 432.983871 65.6989247 432.983871 32.5 420.220898 32.5 412.320009'></polygon>
                <polygon id='Path-6' stroke='#A3A8A9' fill='#2D3B48' points='102.844815 0 84.4686464 88.5291589 84.4686464 110.340883 84.4686464 134.664073 70.2419355 294.265937 73.2058336 444.516129 189.983419 444.516129 197.096774 294.265937 189.792742 224.031626 189.353198 219.80504 180.498945 134.664073 180.498945 88.5291589 163.901115 0'></polygon>
                <polygon id='Path-6' stroke='#42515A' strokeWidth='2' fill='#111C24' points='105.392297 0 88.5348206 89.9907252 88.5348206 136.8873 75.483871 299.124101 78.2028188 451.854839 185.329364 451.854839 191.854839 299.124101 176.628731 136.8873 176.628731 89.9907252 161.402623 0'></polygon>
                <g id='Rectangle-6'>
                  <use fillOpacity='0.3' fill='#06121B' fillRule='evenodd' href='#path-2'></use>
                  <path stroke='#979797' strokeWidth='1' d='M100.042886,139.935484 L83.3829782,285.709677 L184.992075,285.709677 L165.208435,139.935484 L100.042886,139.935484 Z'></path>
                </g>
                <polyline id='Path' stroke='#A3A8A9' strokeWidth='4' points='109.032258 139.435484 132.396313 154.112903 155.16129 139.435484'></polyline>
                <polyline id='Path-12' stroke='#A3A8A9' strokeWidth='2' opacity='0.408797554' points='121.612903 0 102.741935 90.654649 102.741935 136.290323'></polyline>
                <polyline id='Path-12' stroke='#A3A8A9' strokeWidth='2' opacity='0.408797554' transform='translate(152.016129, 67.620968) scale(-1, 1) translate(-152.016129, -67.620968) ' points='161.451613 1.0483871 142.580645 89.6110057 142.580645 134.193548'></polyline>
                <polyline id='Path-12' stroke='#A3A8A9' strokeWidth='2' opacity='0.313179348' points='124.758065 310.322581 102.741935 392.069661 102.741935 450.806452'></polyline>
                <polyline id='Path-12' stroke='#A3A8A9' strokeWidth='2' opacity='0.313179348' transform='translate(152.540323, 380.564516) scale(-1, 1) translate(-152.540323, -380.564516) ' points='163.548387 310.322581 141.532258 392.069661 141.532258 450.806452'></polyline>
                <path d='M104.83871,18.8709677 L161.975806,18.8709677' id='Line' stroke='#2D3B48' strokeWidth='5' strokeLinecap='square'></path>
                <path d='M104.83871,15.7258065 L162.5,15.7258065' id='Line' stroke='#A3A8A9' strokeLinecap='square'></path>
                <path d='M102.741935,20.4435484 L163.250222,20.4435484' id='Line' stroke='#A3A8A9' strokeWidth='2' strokeLinecap='square'></path>
                <path d='M169.83871,139.435484 L188.185484,290.927419' id='Path-9' stroke='#A3A8A9'></path>
                <path d='M96.4516129,139.435484 L77.0564516,295.120968' id='Path-9' stroke='#A3A8A9'></path>
                <polyline id='Path-8' stroke='#4A4A4A' strokeWidth='7' points='82.8225806 131.048387 93.5894518 138.387097 171.350188 138.387097 180.322581 131.048387'></polyline>
                <polyline id='Path-8' stroke='#A3A8A9' strokeWidth='2' points='82.8225806 133.145161 93.5894518 140.483871 171.350188 140.483871 180.322581 133.145161'></polyline>
                <polyline id='Path-8' stroke='#A3A8A9' strokeWidth='2' points='82.8225806 127.903226 93.5894518 135.241935 171.350188 135.241935 180.322581 127.903226'></polyline>
                <polyline id='Path-8' stroke='#2D3B48' strokeWidth='2' points='82.8225806 131.048387 93.5894518 138.387097 171.350188 138.387097 180.322581 131.048387'></polyline>
                <g id='Wheel' filter='url(#filter-5)'>
                  <use fill='url(#linearGradient-3)' fillRule='evenodd' href='#path-4'></use>
                  <path stroke='#4D555A' strokeWidth='1.5' d='M255.633478,154.49731 C238.431895,154.99358 229.372513,154.99152 227.819864,154.450096 C226.154442,153.869346 225.493063,151.530431 225.176295,147.41103 C225.132984,146.847784 225.097172,146.258624 225.063103,145.579157 C225.049855,145.314934 225.037289,145.046422 225.022223,144.710251 C225.018415,144.625278 224.993138,144.054409 224.985912,143.894942 C224.975093,143.656207 224.965866,143.461866 224.956734,143.282736 C224.836587,140.926053 224.836587,128.999601 224.956042,107.450531 C224.552172,92.7035436 224.552172,81.3652083 224.956734,73.4297377 C225.379417,65.138829 226.841025,60.7701612 229.818039,60.3683343 C245.954338,59.9472979 254.511065,59.9472979 256.023951,60.3994912 C257.866685,60.9502743 258.589778,63.040537 259.199852,67.4018783 C259.234657,67.6506962 259.2695,67.9079502 259.312356,68.2306289 C259.328354,68.3510825 259.400269,68.8959083 259.419714,69.0420756 C259.451249,69.2791222 259.477751,69.4751316 259.503378,69.6599756 C260.295181,75.3711806 260.65035,81.7479049 260.730739,89.7848693 C260.761628,92.872971 260.75579,95.4042 260.720488,100.797942 C260.69802,104.230897 260.691009,105.634299 260.691009,107.429998 C260.691009,123.172534 260.285691,138.864364 259.506515,146.409057 C259.202363,149.354143 258.796606,151.469882 258.273022,152.78445 C257.672256,154.292802 256.734765,155.012538 255.633478,154.49731 Z'></path>
                </g>
                <g id='Wheel' filter='url(#filter-7)'>
                  <use fill='url(#linearGradient-3)' fillRule='evenodd' href='#path-6'></use>
                  <path stroke='#4D555A' strokeWidth='1.5' d='M252.488317,456.432794 C235.286733,456.929064 226.227352,456.927004 224.674702,456.385579 C223.009281,455.80483 222.347902,453.465915 222.031134,449.346513 C221.987823,448.783268 221.95201,448.194108 221.917942,447.514641 C221.904694,447.250418 221.892128,446.981906 221.877062,446.645735 C221.873253,446.560762 221.847977,445.989893 221.84075,445.830426 C221.829931,445.591691 221.820705,445.39735 221.811573,445.21822 C221.691425,442.861537 221.691425,430.935085 221.810881,409.386014 C221.40701,394.639027 221.40701,383.300692 221.811573,375.365222 C222.234256,367.074313 223.695864,362.705645 226.672877,362.303818 C242.809177,361.882782 251.365904,361.882782 252.87879,362.334975 C254.721524,362.885758 255.444617,364.976021 256.05469,369.337362 C256.089495,369.58618 256.124338,369.843434 256.167194,370.166113 C256.183192,370.286566 256.255107,370.831392 256.274553,370.977559 C256.306088,371.214606 256.33259,371.410616 256.358216,371.595459 C257.15002,377.306664 257.505189,383.683389 257.585578,391.720353 C257.616466,394.808455 257.610629,397.339684 257.575327,402.733426 C257.552859,406.166381 257.545848,407.569783 257.545848,409.365482 C257.545848,425.108018 257.14053,440.799848 256.361354,448.344541 C256.057201,451.289627 255.651444,453.405366 255.127861,454.719934 C254.527095,456.228286 253.589604,456.948021 252.488317,456.432794 Z'></path>
                </g>
                <g id='Wheel' filter='url(#filter-9)' transform='translate(17.298387, 109.556452) scale(-1, 1) translate(-17.298387, -109.556452) '>
                  <use fill='url(#linearGradient-3)' fillRule='evenodd' href='#path-8'></use>
                  <path stroke='#4D555A' strokeWidth='1.5' d='M30.2302521,156.594084 C13.0286688,157.090354 3.96928741,157.088295 2.41663798,156.54687 C0.751216068,155.96612 0.0898372315,153.627205 -0.226930324,149.507804 C-0.270241911,148.944559 -0.306054194,148.355398 -0.340122521,147.675932 C-0.353370636,147.411708 -0.365936665,147.143197 -0.38100285,146.807026 C-0.384811111,146.722052 -0.410087516,146.151184 -0.417314176,145.991716 C-0.428133068,145.752981 -0.437359488,145.55864 -0.446491834,145.37951 C-0.566639093,143.022827 -0.566639093,131.096376 -0.447183504,109.547305 C-0.85105411,94.8003178 -0.85105411,83.4619825 -0.446491834,75.5265119 C-0.0238087854,67.2356032 1.43779964,62.8669353 4.41481294,62.4651085 C20.5511124,62.0440721 29.1078394,62.0440721 30.6207251,62.4962654 C32.4634591,63.0470485 33.1865526,65.1373111 33.7966258,69.4986524 C33.831431,69.7474704 33.8662739,70.0047244 33.9091299,70.3274031 C33.9251277,70.4478566 33.9970428,70.9926825 34.016488,71.1388498 C34.0480233,71.3758964 34.074525,71.5719058 34.1001518,71.7567498 C34.8919555,77.4679548 35.2471241,83.8446791 35.3275132,91.8816435 C35.3584017,94.9697452 35.3525644,97.5009742 35.3172627,102.894716 C35.2947942,106.327671 35.2877833,107.731073 35.2877833,109.526773 C35.2877833,125.269309 34.8824652,140.961139 34.1032896,148.505831 C33.7991368,151.450917 33.3933799,153.566657 32.8697966,154.881225 C32.2690305,156.389577 31.3315394,157.109312 30.2302521,156.594084 Z'></path>
                </g>
                <g id='Wheel' filter='url(#filter-11)' transform='translate(21.491935, 409.395161) scale(-1, 1) translate(-21.491935, -409.395161) '>
                  <use fill='url(#linearGradient-3)' fillRule='evenodd' href='#path-10'></use>
                  <path stroke='#4D555A' strokeWidth='1.5' d='M34.4238004,456.432794 C17.2222172,456.929064 8.1628358,456.927004 6.61018637,456.385579 C4.94476446,455.80483 4.28338562,453.465915 3.96661806,449.346513 C3.92330648,448.783268 3.88749419,448.194108 3.85342587,447.514641 C3.84017775,447.250418 3.82761172,446.981906 3.81254554,446.645735 C3.80873728,446.560762 3.78346087,445.989893 3.77623421,445.830426 C3.76541532,445.591691 3.7561889,445.39735 3.74705655,445.21822 C3.62690929,442.861537 3.62690929,430.935085 3.74636488,409.386014 C3.34249428,394.639027 3.34249428,383.300692 3.74705655,375.365222 C4.1697396,367.074313 5.63134802,362.705645 8.60836133,362.303818 C24.7446608,361.882782 33.3013878,361.882782 34.8142734,362.334975 C36.6570075,362.885758 37.380101,364.976021 37.9901742,369.337362 C38.0249794,369.58618 38.0598223,369.843434 38.1026783,370.166113 C38.1186761,370.286566 38.1905912,370.831392 38.2100364,370.977559 C38.2415717,371.214606 38.2680734,371.410616 38.2937002,371.595459 C39.0855039,377.306664 39.4406725,383.683389 39.5210616,391.720353 C39.5519501,394.808455 39.5461128,397.339684 39.5108111,402.733426 C39.4883426,406.166381 39.4813317,407.569783 39.4813317,409.365482 C39.4813317,425.108018 39.0760135,440.799848 38.296838,448.344541 C37.9926852,451.289627 37.5869283,453.405366 37.063345,454.719934 C36.4625789,456.228286 35.5250878,456.948021 34.4238004,456.432794 Z'></path>
                </g>
                <polygon id='Path-10' stroke='#A3A8A9' fill='#2D3B48' points='110.080645 303.271615 76.4927243 392.096774 71.2903226 390.550229 105.195111 300.887097'></polygon>
                <polygon id='Path-10' stroke='#A3A8A9' fill='#2D3B48' points='159.354839 303.702179 187.992193 392.096774 192.903226 390.352511 165.197725 300.887097'></polygon>
                <polygon id='Path-10' stroke='#A3A8A9' fill='#2D3B48' points='192.334941 395.241935 71.8586072 395.241935 71.2903226 388.951613 192.903226 388.951613'></polygon>
                <path d='' id='Path-13' stroke='#979797'></path>
                <polygon id='Path-10' stroke='#A3A8A9' fill='#2D3B48' points='68.7379409 287.258065 194.40722 287.258065 195 291.451613 68.1451613 291.451613'></polygon>
                <g id='Path-10'>
                  <use fill='#2D3B48' fillRule='evenodd' href='#path-12'></use>
                  <path stroke='#A3A8A9' strokeWidth='1' d='M72.05489,286.794143 L109.037163,301.660363 C113.471062,303.279102 116.840253,304.31722 119.135218,304.773844 C122.553823,305.454037 126.067486,305.794194 129.676666,305.794194 L140.660235,305.794194 C148.820315,305.794194 155.485791,304.422365 160.690395,301.672985 L194.836797,286.527062 L195.54196,292.332272 L195.193067,292.478318 L161.130297,306.734365 C156.638981,309.154349 151.547401,310.363469 145.862979,310.363469 C145.309547,310.363469 144.570793,310.38638 143.466427,310.434726 C142.918243,310.458725 140.606623,310.568179 140.068613,310.592514 C134.710332,310.834875 130.65665,310.902376 126.542886,310.727237 C124.778481,310.652119 123.106984,310.531457 121.529652,310.360559 C118.188294,309.998538 113.909352,308.797646 108.6881,306.761592 L70.746763,292.345442 L71.4505896,286.551229 L72.05489,286.794143 Z'></path>
                </g>
                <path d='M166.693548,142.580645 L185.278592,288.000305' id='Path-9' stroke='#2D3B48' strokeWidth='4'></path>
                <path d='M165.645161,139.435484 L184.516129,286.209677' id='Path-9' stroke='#A3A8A9'></path>
                <path d='M100.645161,139.435484 L81.7741935,287.258065' id='Path-9' stroke='#A3A8A9'></path>
                <path d='M98.5483871,141.532258 L79.6774194,288.306452' id='Path-9' stroke='#42515A' strokeWidth='2'></path>
                <polygon id='Triangle' stroke='#202A34' fill='#A3A8A9' points='132.096774 152.016129 139.435484 158.306452 124.758065 158.306452'></polygon>
                <g id='Rectangle-3'>
                  <use fill='#A3A8A9' fillRule='evenodd' href='#path-13'></use>
                  <path stroke='#171E25' strokeWidth='1.25' d='M114.18365,158.891563 C111.645853,159.026422 109.657258,161.123496 109.657258,163.664875 C109.657258,166.150403 111.672177,168.165323 114.157706,168.165323 L152.132616,168.165323 C154.618145,168.165323 156.633065,166.150403 156.633065,163.664875 C156.633065,161.123496 154.64447,159.026422 152.106672,158.891563 L133.178327,157.882184 L114.18365,158.891563 Z'></path>
                </g>
                <ellipse id='Oval' stroke='#171E25' strokeWidth='1.25' fill='#7B8081' cx='133.145161' cy='166.693548' rx='22.016129' ry='3.14516129'></ellipse>
                <g id='Combined-Shape'>
                  <use fill='#2D3B48' fillRule='evenodd' href='#path-14'></use>
                  <path stroke='#A3A8A9' strokeWidth='2' d='M129.08786,304.648229 L140.682708,304.59511 C145.567699,304.57273 149.909818,303.761864 153.725834,302.15993 C155.655448,301.349892 157.090639,302.091559 157.090639,304.104018 C157.090639,305.518829 156.400839,307.746528 155.029523,310.890848 L154.858254,311.283555 L154.455798,311.430461 C151.840682,312.385044 149.076962,312.84462 146.168515,312.812417 C145.619309,312.806336 144.875122,312.834133 143.778026,312.89765 C143.160895,312.933379 140.675145,313.093023 140.342023,313.113587 C134.501588,313.474124 130.178194,313.546867 125.728096,313.195959 C123.84373,313.047369 122.056823,312.822214 120.373461,312.513188 C118.538628,312.186275 116.927346,311.587479 113.858218,310.183569 L113.432515,309.98884 L113.309398,309.537194 C111.786714,303.951358 111.623985,301.277319 113.742864,301.078982 C114.277003,301.028984 115.02468,301.202982 116.446045,301.636137 C116.953943,301.790917 119.657716,302.65426 120.470993,302.903467 C121.66901,303.270568 122.720187,303.569906 123.717077,303.821482 C125.877698,304.366739 127.668368,304.654732 129.08786,304.648229 Z'></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default CarVizualization;
