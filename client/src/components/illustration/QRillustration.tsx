export default function QRillustration({ children, classStyle }: { children: React.ReactNode; classStyle: string }) {
  return (
    <svg className={classStyle} viewBox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='ScanMe 1'>
        <g id='container'>
          <path
            id='Vector'
            opacity='0.27'
            d='M346.2 426.8H138.2C135.7 426.8 133.6 424.7 133.6 422.2C133.6 419.7 135.7 417.6 138.2 417.6H346.2C348.7 417.6 350.8 419.7 350.8 422.2C350.8 424.7 348.8 426.8 346.2 426.8Z'
            fill='#434E82'
          />
          <path
            id='Vector_2'
            d='M333.6 72.6C333.6 59.4 322.9 48.7 309.7 48.7H177.4C164.2 48.7 153.5 59.4 153.5 72.6V84.5H333.6V72.6Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_3'
            d='M333.6 84.5H153.5V377.3H333.6V84.5Z'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_4'
            d='M153.5 377.3V397.7C153.5 410.9 164.2 421.6 177.4 421.6H309.7C322.9 421.6 333.6 410.9 333.6 397.7V377.3H153.5Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_5'
            d='M256.3 68.8H230.8C229.5 68.8 228.4 67.7 228.4 66.4C228.4 65.1 229.5 64 230.8 64H256.3C257.6 64 258.7 65.1 258.7 66.4C258.7 67.8 257.6 68.8 256.3 68.8Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_6'
            d='M243.5 410.8C250.127 410.8 255.5 405.427 255.5 398.8C255.5 392.173 250.127 386.8 243.5 386.8C236.873 386.8 231.5 392.173 231.5 398.8C231.5 405.427 236.873 410.8 243.5 410.8Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_7'
            d='M212.8 150.5H185.1H181.6V154V181.7H185.1V154H212.8V150.5Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_8'
            d='M275.5 277.3H303.1H306.6V273.7V246.1H303.1V273.7H275.5V277.3Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='QR'>
            <foreignObject x='194' y='164' width='100' height='100'>
              {children}
            </foreignObject>
          </g>
        </g>
        <path
          id='Vector_9'
          opacity='0.27'
          d='M126.6 451.2H62.1C59.6 451.2 57.5 449.1 57.5 446.6C57.5 444.1 59.6 442 62.1 442H126.7C129.2 442 131.3 444.1 131.3 446.6C131.2 449.2 129.2 451.2 126.6 451.2Z'
          fill='#434E82'
        />
        <path
          id='Vector_10'
          opacity='0.27'
          d='M437.9 437.9H319.9C317.4 437.9 315.3 435.8 315.3 433.3C315.3 430.8 317.4 428.7 319.9 428.7H437.9C440.4 428.7 442.5 430.8 442.5 433.3C442.6 435.8 440.5 437.9 437.9 437.9Z'
          fill='#434E82'
        />
        <g id='Group'>
          <g id='Vector_11'>
            <path
              d='M145.3 143.9C145.4 143.9 145.6 143.9 146 144C147.8 144.3 152.5 145.3 153 146.4C153.6 147.7 154.5 150.4 154.3 151.2C154 152 153.1 154.6 153.1 154.6C153.1 154.6 164.8 163.9 165.7 167.1C166.6 170.3 170.9 234 170.7 236.3C170.5 238.6 166.6 257.6 165.7 258.7C164.8 259.8 162.8 261.6 162.8 261.6C162.8 261.6 163 273.1 162.1 273.6C161.2 274.1 138.1 277.7 136.1 277.9C134.1 278.1 112.5 279.7 112.5 279.7C112.5 279.7 110.8 272.2 111.1 271.5C111.4 270.8 111.1 246.8 111.1 246.8C111.1 246.8 96.3 256.5 93.3 255.6C90.4 254.7 86.7 248.1 86.3 247.2C85.8 246.3 79 230.6 79 230.3C79 230 80.9 229.7 81.9 229.3C82.9 228.9 82.9 224.2 83 223.6C83.1 223 88.7 215.5 90 212.6C91.3 209.7 105.7 171.2 109.4 168.4C113 165.6 123.8 159.7 123.8 159.7C123.8 159.7 124.6 154.6 125.9 152.9C127.2 151.2 138.2 143.6 138.6 143.1'
              fill='#263238'
            />
            <path
              d='M145.3 143.9C145.4 143.9 145.6 143.9 146 144C147.8 144.3 152.5 145.3 153 146.4C153.6 147.7 154.5 150.4 154.3 151.2C154 152 153.1 154.6 153.1 154.6C153.1 154.6 164.8 163.9 165.7 167.1C166.6 170.3 170.9 234 170.7 236.3C170.5 238.6 166.6 257.6 165.7 258.7C164.8 259.8 162.8 261.6 162.8 261.6C162.8 261.6 163 273.1 162.1 273.6C161.2 274.1 138.1 277.7 136.1 277.9C134.1 278.1 112.5 279.7 112.5 279.7C112.5 279.7 110.8 272.2 111.1 271.5C111.4 270.8 111.1 246.8 111.1 246.8C111.1 246.8 96.3 256.5 93.3 255.6C90.4 254.7 86.7 248.1 86.3 247.2C85.8 246.3 79 230.6 79 230.3C79 230 80.9 229.7 81.9 229.3C82.9 228.9 82.9 224.2 83 223.6C83.1 223 88.7 215.5 90 212.6C91.3 209.7 105.7 171.2 109.4 168.4C113 165.6 123.8 159.7 123.8 159.7C123.8 159.7 124.6 154.6 125.9 152.9C127.2 151.2 138.2 143.6 138.6 143.1'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_12'>
            <path
              d='M142.4 119.2L146.2 152C146.2 152 136.7 161 134.4 162.4C132.1 163.9 131.2 164 131.2 164C131.2 164 131.6 151.4 131.5 148.5C131.4 145.6 130.3 139.5 130.3 139.3C130.2 139.1 139 119.9 139 119.9'
              fill='#FFC6C2'
            />
            <path
              d='M142.4 119.2L146.2 152C146.2 152 136.7 161 134.4 162.4C132.1 163.9 131.2 164 131.2 164C131.2 164 131.6 151.4 131.5 148.5C131.4 145.6 130.3 139.5 130.3 139.3C130.2 139.1 139 119.9 139 119.9'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_13'>
            <path
              d='M142.4 133.7C139.8 139 133.3 143.9 127.7 144.9C122 145.9 119 141.2 119 141.2L113.5 128.2C113.5 128.2 113.7 116.3 122.5 111.6C131.3 106.9 136.4 110.3 137.9 112.1C139.4 113.9 140.7 117.3 140.7 117.3'
              fill='#FFC6C2'
            />
            <path
              d='M142.4 133.7C139.8 139 133.3 143.9 127.7 144.9C122 145.9 119 141.2 119 141.2L113.5 128.2C113.5 128.2 113.7 116.3 122.5 111.6C131.3 106.9 136.4 110.3 137.9 112.1C139.4 113.9 140.7 117.3 140.7 117.3'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_14'>
            <path
              d='M139.5 121.5C139.5 121.5 140.2 119.1 142.4 118.5C144.6 117.9 146.8 121.4 145.7 124.3C144.6 127.1 141.2 128 141.2 128'
              fill='#FFC6C2'
            />
            <path
              d='M139.5 121.5C139.5 121.5 140.2 119.1 142.4 118.5C144.6 117.9 146.8 121.4 145.7 124.3C144.6 127.1 141.2 128 141.2 128'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_15'
            d='M140.9 125.1L142.4 122.8'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_16'>
            <path d='M122 128.9L122.5 137.2L124.8 136.2' fill='#FA7D64' />
            <path
              d='M122 128.9L122.5 137.2L124.8 136.2'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_17'
            d='M131.3 131.5C131.3 132.5 130.5 133.4 129.4 133.4C128.4 133.4 127.5 132.6 127.5 131.5C127.5 130.4 128.3 129.6 129.4 129.6C130.4 129.6 131.3 130.4 131.3 131.5Z'
            fill='#FA7D64'
          />
          <path
            id='Vector_18'
            d='M121.1 135C121.1 136 120.3 136.9 119.2 136.9C118.2 136.9 117.3 136.1 117.3 135C117.3 133.9 118.1 133.1 119.2 133.1C120.2 133.1 121.1 133.9 121.1 135Z'
            fill='#FA7D64'
          />
          <path
            id='Vector_19'
            d='M115.1 132.2C115.1 132.2 108.7 132.5 108.5 129C108.3 125.4 111.9 126.3 110.2 122.5C108.5 118.8 105.2 114 109.8 110C114.4 106 119.2 106.9 122 107.7C124.8 108.5 125.7 108.9 127.5 107.4C129.3 105.9 132.8 105.2 134.9 105.9C137 106.6 138.6 108.8 140 109.4C141.4 110 143.3 111.4 142.8 113.5C142.3 115.6 143.2 117.4 144.3 117.7C145.4 118 147.1 118.5 147.4 121C147.7 123.5 145 125.9 145 125.9C145 125.9 147.2 121.3 144.5 119.7C141.8 118.2 139.9 119.4 139.2 121.3C138.5 123.3 138.5 123.3 138.5 123.3C138.5 123.3 135.8 123.7 134.8 121.9C133.9 120 133.9 119.1 133.9 119.1C133.9 119.1 131.5 119.8 129.4 117.9C127.3 116 124.8 113 124.8 113C124.8 113 123.7 118.3 120.2 121.5C116.6 124.7 114.7 126.3 114.3 126.8C113.9 127 115.1 132.2 115.1 132.2Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_20'>
            <path d='M111.1 128C111.1 128 112.9 127.3 113.9 126.6Z' fill='#4285F4' />
            <path
              d='M111.1 128C111.1 128 112.9 127.3 113.9 126.6'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_21'>
            <path d='M115.2 117.9C115.2 117.9 116.8 113.3 120.8 112.8C124.8 112.3 124.8 112.3 124.8 112.3L122.7 111.2' fill='#4285F4' />
            <path
              d='M115.2 117.9C115.2 117.9 116.8 113.3 120.8 112.8C124.8 112.3 124.8 112.3 124.8 112.3L122.7 111.2'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_22'>
            <path d='M133.4 111.5C133.4 111.5 137 112.7 137.2 114.8C137.4 116.9 137.7 116.8 137.7 116.8' fill='#4285F4' />
            <path
              d='M133.4 111.5C133.4 111.5 137 112.7 137.2 114.8C137.4 116.9 137.7 116.8 137.7 116.8'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_23'
            d='M126.8 128.3C127.131 128.3 127.4 128.031 127.4 127.7C127.4 127.369 127.131 127.1 126.8 127.1C126.469 127.1 126.2 127.369 126.2 127.7C126.2 128.031 126.469 128.3 126.8 128.3Z'
            fill='black'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_24'
            d='M118.2 131.4C118.531 131.4 118.8 131.131 118.8 130.8C118.8 130.469 118.531 130.2 118.2 130.2C117.869 130.2 117.6 130.469 117.6 130.8C117.6 131.131 117.869 131.4 118.2 131.4Z'
            fill='black'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_25'
            d='M128.3 136.5L123.7 138.7C123.7 138.7 124.3 140.7 126.3 140.3C128.3 139.8 128.6 137.7 128.3 136.5Z'
            fill='white'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_26'
            d='M127.4 120.3C127.4 120.3 125.2 120 124.3 121.3'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_27'
            d='M116.1 125.8C116.1 125.8 116.8 123.7 118.8 123.5'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_28'
            d='M141.7 135C141.7 135 140.4 139.4 139.5 141.9C138.6 144.4 131.5 149.4 131.5 149.4L130.4 144.1C130.4 144.1 134.7 141.8 138.2 139.1C141.7 136.4 141.7 135 141.7 135Z'
            fill='black'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_29'>
            <path d='M159.8 165C159.2 165 150.5 169.6 149.2 172.2C147.9 174.9 138.3 227.9 138.3 227.9L140.9 194.6' fill='#263238' />
            <path
              d='M159.8 165C159.2 165 150.5 169.6 149.2 172.2C147.9 174.9 138.3 227.9 138.3 227.9L140.9 194.6'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_30'>
            <path
              d='M165.5 189.3C165.3 190.4 161.5 231.1 159.8 236.6C158.1 242.1 145.9 255.2 140.9 256.8C135.9 258.3 123.8 256.6 120 253.6C116.3 250.6 108.5 243.5 108.5 243.5L107.5 241.2L100.5 234.7L104.1 226L113.9 227.9C113.9 227.9 117.4 226.4 118.1 226.4C118.8 226.4 139.9 228.9 140.8 228.9C141.7 228.9 151 229.3 152.9 230.2'
              fill='#263238'
            />
            <path
              d='M165.5 189.3C165.3 190.4 161.5 231.1 159.8 236.6C158.1 242.1 145.9 255.2 140.9 256.8C135.9 258.3 123.8 256.6 120 253.6C116.3 250.6 108.5 243.5 108.5 243.5L107.5 241.2L100.5 234.7L104.1 226L113.9 227.9C113.9 227.9 117.4 226.4 118.1 226.4C118.8 226.4 139.9 228.9 140.8 228.9C141.7 228.9 151 229.3 152.9 230.2'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_31'>
            <path
              d='M103.5 198.1C104 198.8 112.7 220.7 112.5 220.1C112.3 219.4 107.5 196.6 108 195.2C108.5 193.8 111.1 176.4 111.1 176.4'
              fill='#263238'
            />
            <path
              d='M103.5 198.1C104 198.8 112.7 220.7 112.5 220.1C112.3 219.4 107.5 196.6 108 195.2C108.5 193.8 111.1 176.4 111.1 176.4'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_32'>
            <path d='M138.3 162.3C138.3 162.3 146.3 157.3 147.3 155Z' fill='#263238' />
            <path
              d='M138.3 162.3C138.3 162.3 146.3 157.3 147.3 155'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_33'>
            <path d='M127.4 159.1C127.1 159.4 128.2 163.9 128.4 164C128.6 164.1 127.8 162.7 127.3 162.3' fill='#263238' />
            <path
              d='M127.4 159.1C127.1 159.4 128.2 163.9 128.4 164C128.6 164.1 127.8 162.7 127.3 162.3'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_34'
            d='M113.9 227.9L107.5 241.2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_35'
            d='M76.3 210.2L84.2 230C84.2 230 84.8 231.3 85.3 231.4C85.9 231.5 96.4 231 96.6 230.9C96.8 230.8 97.9 230.5 97.9 229.9C97.9 229.2 91.3 209.3 91.3 209.3C91.3 209.3 90.9 207.7 89.5 207.6C88.2 207.5 76.9 209.1 76.9 209.1C76.9 209.1 76 209.3 76.3 210.2Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_36'
            d='M103.7 226.9C103.7 226.9 101.7 225.1 101.5 224.3C101.3 223.6 99.9 221.3 98.6 220.4C97.3 219.5 95.6 219.4 95.6 219.4L96.9 223.2L89.6 219.4C89.6 219.4 89.6 222.3 90 222.7C90.4 223.1 92.2 225.6 92.2 225.6C92.2 225.6 92.8 230.6 93.1 231C93.4 231.4 100.5 234.8 100.5 234.8L103.7 226.9Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_37'
            d='M78.9 230.5C78.9 230.5 75.6 221.4 75.8 220.7C75.9 220 76.8 218.4 77.4 217.9C78 217.4 81.3 213.3 81.3 213.3C81.3 213.3 81.7 215 81.7 215.4C81.7 215.8 80.2 218.1 80.1 218.3C80 218.5 81.7 220.4 81.7 221C81.8 221.6 83.1 222.9 83 223.8C82.9 224.7 83.4 225.9 83 227C82.6 228.1 81.9 229.4 81.9 229.4L78.9 230.5Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_38'>
            <path d='M112.5 268.5C112.5 268.5 129 268.8 131.2 268.5C133.4 268.2 162.8 261.7 162.8 261.7' fill='#263238' />
            <path
              d='M112.5 268.5C112.5 268.5 129 268.8 131.2 268.5C133.4 268.2 162.8 261.7 162.8 261.7'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_39'
            d='M162.1 273.7C162.1 273.7 160.2 290.2 158.4 294.1C156.7 298 137.6 318.6 137.6 318.6L132.9 338.5L141.2 347.2L130.6 362.1L128.3 359.4L112.7 424L98.5 422L105.5 348C105.5 348 89.1 334.5 93.1 323.5C97.1 312.5 108.8 303.2 108.8 303.2L113.9 279.8L162.1 273.7Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_40'
            d='M107.5 304.2L126 283'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_41'>
            <path d='M137.7 318.6L124.8 329.2L133 338.5' fill='#4285F4' />
            <path
              d='M137.7 318.6L124.8 329.2L133 338.5'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_42'
            d='M105.5 348L129.1 360.3'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_43'
            d='M120.6 355.9L133.8 339.4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_44'
            d='M99.7 409.7L116.5 407.9'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_45'
            d='M133.1 358.7L137.7 361.7L144.2 352.1L140.7 348L133.1 358.7Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_46'
            d='M137.7 361.7C137.7 361.7 146.2 371.9 146.5 373C146.9 374 149.7 393.7 150.6 394.7C151.5 395.7 156.4 398.9 156.4 398.9C156.4 398.9 157.1 364 157.1 363.7C157.1 363.4 144.2 352.1 144.2 352.1L137.7 361.7Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_47'
            d='M110.9 424L104.4 445.6H74.6C74.6 445.6 76 441.7 82.9 439.5C89.9 437.3 94.4 435.4 96 432.5C97.5 429.6 99.7 422.2 99.7 422.2L110.9 424Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_48'
            d='M155 361.7L154.2 397.4L156.4 398.8L157 363.6L155 361.7Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_49'
            d='M149 387.5L154.4 386.9L154.2 397.4L150.6 394.6L149 387.5Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_50'
            d='M105 444.1H76.2L74.6 445.6H104.5L105 444.1Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_51'
            d='M83.7 439.2C83.7 439.2 86.5 439.9 86.7 444.1H76.2C76.2 444.1 78 440.3 83.7 439.2Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_52'>
            <path d='M146.5 276.1C146.5 276.1 151.1 283.5 154.5 284.2C157.9 284.9 159.8 284.2 159.8 284.2' fill='#4285F4' />
            <path
              d='M146.5 276.1C146.5 276.1 151.1 283.5 154.5 284.2C157.9 284.9 159.8 284.2 159.8 284.2'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_53'
            d='M150.2 281.1C150.2 281.1 113.6 322.5 112.5 322.8C111.4 323.1 110.1 328.6 110.7 329.3C111.3 330 127.3 346.8 127.3 346.8'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_54'
            d='M116.5 353.8L109.1 408.8'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <g id='Group_2'>
          <path
            id='Vector_55'
            d='M369.2 235.2C369.2 235.2 375.9 324.3 376.7 327.8C377.5 331.3 393.1 399.7 393.1 399.7L382.1 404.3L354 343.1L346.9 245.7L357.5 230.1L369.2 235.2Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_56'>
            <path
              d='M367.9 233.1L329.3 234.6C329.3 234.6 318.8 254.1 319.6 268.3C320.4 282.5 344.8 315.8 344.8 315.8C344.8 315.8 339.2 329.2 338.4 335.9C337.6 342.6 334.6 404.3 334.6 404.3L344.8 401.9C344.8 401.9 373.5 316.9 374 313.7C374.5 310.5 358.1 255.8 358.1 255.8'
              fill='#263238'
            />
            <path
              d='M367.9 233.1L329.3 234.6C329.3 234.6 318.8 254.1 319.6 268.3C320.4 282.5 344.8 315.8 344.8 315.8C344.8 315.8 339.2 329.2 338.4 335.9C337.6 342.6 334.6 404.3 334.6 404.3L344.8 401.9C344.8 401.9 373.5 316.9 374 313.7C374.5 310.5 358.1 255.8 358.1 255.8'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_57'
            d='M378.3 171.9C378.3 171.9 387.3 178.2 385.7 187.3L379.3 213L371.2 216.6C371.2 216.6 371.7 176.1 371.6 175.7C371.4 175.2 378.3 171.9 378.3 171.9Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_58'
            d='M382.6 212.7L385.1 209.4C385.1 209.4 387.6 205.8 388.4 205.7C389.2 205.6 395.8 205.7 395.8 205.7C395.8 205.7 397.1 205.2 395.8 207.8C394.5 210.4 388.5 218.3 388.5 218.3C388.5 218.3 388.2 220 385.7 220.3C383.2 220.5 378.3 220.3 378.3 220.3L382.6 212.7Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_59'>
            <path
              d='M340.5 168.1L339.5 168.5L329.4 173.1C329.4 173.1 340.3 171.7 340.5 181.6C340.7 191.5 342.1 233.1 342.1 233.1H368.4C368.4 233.1 378.2 201.4 378.8 192.5C379.4 183.6 371.7 170.9 371.7 170.9L360.8 173.1'
              fill='#4285F4'
            />
            <path
              d='M340.5 168.1L339.5 168.5L329.4 173.1C329.4 173.1 340.3 171.7 340.5 181.6C340.7 191.5 342.1 233.1 342.1 233.1H368.4C368.4 233.1 378.2 201.4 378.8 192.5C379.4 183.6 371.7 170.9 371.7 170.9L360.8 173.1'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_60'
            d='M367.3 152C367.3 152 365.8 159.7 366.5 162.6C367.2 165.5 370.4 171.9 370.4 171.9C370.4 171.9 357.6 174.3 354.6 174.1C351.6 173.9 347.5 163.5 347.3 162.6C347.1 161.7 345.9 140.9 349.3 137.4C352.7 133.9 356.4 133.5 356.4 133.5L367.3 152Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_61'>
            <path
              d='M350.7 133.3C351.9 129.5 358.1 122.7 368.2 122.1C378.2 121.4 381 128.2 381.2 135C381.4 141.7 376.3 152.9 368.9 153.9C361.5 154.9 355.1 149.3 355.1 149.3'
              fill='#FFC6C2'
            />
            <path
              d='M350.7 133.3C351.9 129.5 358.1 122.7 368.2 122.1C378.2 121.4 381 128.2 381.2 135C381.4 141.7 376.3 152.9 368.9 153.9C361.5 154.9 355.1 149.3 355.1 149.3'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_62'>
            <path d='M352.2 134.8C352.2 134.8 348.4 129.9 345.7 134.8C343 139.7 347.2 144 350.2 143.6' fill='#FFC6C2' />
            <path
              d='M352.2 134.8C352.2 134.8 348.4 129.9 345.7 134.8C343 139.7 347.2 144 350.2 143.6'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_63'
            d='M380.8 139C380.8 139 382.7 137.4 383.2 139C383.7 140.6 381 145.3 378.8 144.9L380.8 139Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_64'>
            <path d='M369.9 138.3L371.6 142.9L369.9 141.3' fill='#FA7D64' />
            <path
              d='M369.9 138.3L371.6 142.9L369.9 141.3'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_65'
            d='M355.8 149.7C355.8 149.7 362.3 154.5 368.4 153.8C368.4 153.8 366.5 157.1 366.4 158.6C366.3 160.1 366.3 160.7 366.3 160.7C366.3 160.7 356.6 155.1 355.8 149.7Z'
            fill='black'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_66'
            d='M366.7 135.9C366.7 136.3 366.4 136.6 366 136.6C365.6 136.6 365.3 136.3 365.3 135.9C365.3 135.5 365.6 135.2 366 135.2C366.3 135.1 366.7 135.5 366.7 135.9Z'
            fill='black'
            stroke='black'
            strokeWidth='0.4167'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_67'
            d='M374.8 136.3C374.8 136.7 374.5 137 374.1 137C373.7 137 373.4 136.7 373.4 136.3C373.4 135.9 373.7 135.6 374.1 135.6C374.5 135.6 374.8 135.9 374.8 136.3Z'
            fill='black'
            stroke='black'
            strokeWidth='0.4167'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_68'
            d='M364.8 141.4C365.794 141.4 366.6 140.594 366.6 139.6C366.6 138.606 365.794 137.8 364.8 137.8C363.806 137.8 363 138.606 363 139.6C363 140.594 363.806 141.4 364.8 141.4Z'
            fill='#FA7D64'
          />
          <path
            id='Vector_69'
            d='M376.2 140.6C376.2 141.6 375.4 142.4 374.4 142.4C373.4 142.4 372.6 141.6 372.6 140.6C372.6 139.6 373.4 138.8 374.4 138.8C375.4 138.8 376.2 139.6 376.2 140.6Z'
            fill='#FA7D64'
          />
          <g id='Vector_70'>
            <path d='M365.2 142.4C365.2 142.4 366.9 145.8 370.7 145.7Z' fill='#FFC6C2' />
            <path
              d='M365.2 142.4C365.2 142.4 366.9 145.8 370.7 145.7'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_71'
            d='M349.4 132.7C349.4 132.7 353.4 135.9 359.3 135.1C365.1 134.3 370.7 130.9 373.4 128.3C376 125.7 376.7 124 376.7 124C376.7 124 368.1 118.8 360.9 121.1C353.7 123.5 348.6 129.4 348 130.6C347.4 131.7 347.3 132.5 347.3 132.5L349.4 132.7Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_72'
            d='M349.5 143.6C349.5 143.6 352.3 148.1 357.2 152C362.1 155.9 363.4 165.4 363.6 171.3C363.8 177.1 364.3 188.5 358.7 189.4C353.1 190.4 352 184.1 350.7 180.2C349.4 176.3 342.5 171.7 340.5 168.1C338.5 164.5 338.1 163.7 339.5 159.6C340.9 155.5 345.5 140.6 345.5 140.6C345.5 140.6 345.9 143 349.5 143.6Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_73'
            d='M371.6 152.9C371.6 152.9 370.9 159.1 372.6 162.1C374.3 165.1 384.7 171 385.3 175.4C385.9 179.8 385.9 183.4 384.7 184C383.5 184.6 375.6 177.4 373.4 174.6C371.2 171.8 370.9 173.6 368.8 168.5C366.7 163.4 365.5 160.2 366.5 157.8C367.5 155.4 368.3 153.8 368.3 153.8L371.6 152.9Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_74'
            d='M329.4 173.1C329.4 173.1 340.4 170.9 341.2 181.4C342.1 191.9 341.5 216.5 341.5 216.5L372.6 212.9C372.6 212.9 380.9 208.3 381.5 208.4C382.2 208.5 385 209.3 385 209.3L382.5 212.6C382.5 212.6 386.1 213.6 386.4 213.5C386.7 213.4 390.2 212.8 390.3 213C390.4 213.2 389.6 214.3 388.9 214.9C388.2 215.5 382.5 218.2 382 218.5C381.5 218.9 368.3 220.8 367.6 221.1C366.9 221.4 342.4 236.8 335.8 236.8C329.2 236.8 325 231 324.7 223.6C324.4 216.1 324.7 180.5 324.7 180.5C324.7 180.5 326.5 174.4 329.4 173.1Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_75'>
            <path d='M341.5 216.5C341.5 216.5 334.7 217.2 331.5 220.7Z' fill='#FFC6C2' />
            <path
              d='M341.5 216.5C341.5 216.5 334.7 217.2 331.5 220.7'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_76'
            d='M352.2 134.2C352.2 134.2 352.7 137.9 354.1 137.9C355.5 137.9 358.7 135.2 358.7 135.2L352.2 134.2Z'
            fill='#263238'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_77'
            d='M367.9 233.1C367.9 233.1 372 239.8 372.4 239.9C372.8 240 383 233.4 385.8 230.7C388.5 227.9 396.2 216.5 396.2 216.5C396.2 216.5 393.7 207.5 393.4 207.4C393.1 207.3 392 208.6 392 209.2C392 209.8 391.9 212 391.9 212C391.9 212 387.6 220.3 387.2 220.2C386.7 220.1 385 220.2 384.6 220.2C384.2 220.2 378.2 220.1 378.2 220.1L378.7 219.3L372.1 220.4L367.9 233.1Z'
            fill='#FFC6C2'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='Vector_78'>
            <path d='M348.5 145.8C348.5 145.8 351.4 152.8 352.2 159.1C352.9 165.4 352.9 169.4 352.9 169.4' fill='#263238' />
            <path
              d='M348.5 145.8C348.5 145.8 351.4 152.8 352.2 159.1C352.9 165.4 352.9 169.4 352.9 169.4'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_79'>
            <path d='M358.2 168.1C358.2 168.1 360 174.2 360.3 177.8Z' fill='#263238' />
            <path
              d='M358.2 168.1C358.2 168.1 360 174.2 360.3 177.8'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_80'>
            <path d='M354.1 131.3C354.1 131.3 360.6 130.9 365.3 128.8Z' fill='#263238' />
            <path
              d='M354.1 131.3C354.1 131.3 360.6 130.9 365.3 128.8'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <g id='Vector_81'>
            <path d='M372.1 122C372.1 122 366 126.3 364.2 126.6Z' fill='#263238' />
            <path
              d='M372.1 122C372.1 122 366 126.3 364.2 126.6'
              stroke='black'
              strokeWidth='0.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='Vector_82'
            d='M375.6 390.1L389.9 385.6'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_83'
            d='M335.5 386.8H349.9'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_84'
            d='M334.7 404.2L328.7 433.3H362.5C362.5 433.3 362.7 430.2 360.7 428.7C358.7 427.2 343.1 419.7 342.7 418.8C342.3 417.9 344.8 401.9 344.8 401.9L334.7 404.2Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_85'
            d='M382.1 404.2C382.1 404.2 382.1 404.4 382.2 404.7C382.9 407.4 385.7 419.2 385.8 420.4C385.9 421.8 387.1 429.7 387.1 429.7L424.9 428.5C424.9 428.5 423.5 423.5 422.1 423C420.7 422.5 408.3 417.7 406.8 416.9C405.3 416 393.1 399.5 393.1 399.5L382.1 404.2Z'
            fill='#4285F4'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_86'
            d='M412.8 419.5C412.8 419.5 408.9 422.1 407.9 423.2C406.9 424.4 405.4 429.2 405.4 429.2L425 428.6L422.2 423.1L412.8 419.5Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_87'
            d='M386.7 426.4H406.4L405.4 429.3L387.1 429.8L386.7 426.4Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_88'
            d='M352.8 424.4C352.8 424.4 349.1 428.3 347.8 429.3C346.6 430.3 345.6 433.3 345.6 433.3H362.5C362.5 433.3 362.6 429 361.6 428.9C360.7 428.7 352.8 424.4 352.8 424.4Z'
            fill='#FFEEED'
            stroke='black'
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
}
