import * as React from 'react';

const Separator = ({ color = "#0B0B0C", inverted }: { color?: string, inverted?: boolean }) => {
    return (
        <svg
            className={`${inverted ? 'rotate-180' : ''} w-full`}
            xmlns="http://www.w3.org/2000/svg"
            width="1920px" height="37px" >
            <path fill-rule="evenodd" fill={color}
                d="M1920.000,13.018 L1920.000,37.011 L0.001,37.011 L0.001,13.045 L158.501,13.016 L161.323,15.828 L156.611,20.516 L166.026,20.516 
                                L161.323,15.828 L164.151,13.016 L234.068,13.016 L238.084,8.999 L245.996,1.109 L251.272,6.368 L278.008,6.251 L282.294,6.251 L293.125,17.048
                                L321.902,17.048 L328.095,10.874 L391.637,10.907 L396.574,15.825 L403.975,8.445 L406.448,10.907 L547.767,10.874 L558.686,0.003 L579.264,20.516 
                                L579.271,20.507 L579.280,20.516 L587.026,12.795 L590.313,12.795 L592.110,14.586 L589.255,17.421 L594.951,17.421 L592.110,14.586 L593.874,12.831
                                L644.001,12.800 L644.001,12.795 L881.769,12.795 L888.317,6.251 L899.373,6.251 L913.035,20.516 L913.055,20.497 L913.071,20.516 L920.918,13.016 
                                L1045.501,13.016 L1048.323,15.828 L1043.611,20.516 L1053.026,20.516 L1048.323,15.828 L1051.151,13.016 L1121.068,13.016 L1125.084,8.999 
                                L1132.996,1.109 L1138.272,6.368 L1165.008,6.251 L1169.294,6.251 L1180.125,17.048 L1208.902,17.048 L1215.095,10.874 L1278.637,10.907 
                                L1283.574,15.825 L1290.975,8.445 L1293.448,10.907 L1434.767,10.874 L1445.686,0.003 L1466.264,20.516 L1466.271,20.507 L1466.280,20.516
                                L1474.026,12.795 L1477.313,12.795 L1479.110,14.586 L1476.255,17.421 L1481.951,17.421 L1479.110,14.586 L1480.874,12.831 L1534.001,12.798
                                L1534.001,12.795 L1771.769,12.795 L1778.317,6.251 L1789.373,6.251 L1803.035,20.516 L1803.055,20.497 L1803.071,20.516 L1810.918,13.016 
                                L1920.000,13.018 ZM54.441,16.085 L52.957,16.085 L52.957,20.516 L54.441,20.516 L54.441,16.085 ZM56.686,16.085 L55.206,16.085 L55.206,20.516 
                                L56.686,20.516 L56.686,16.085 ZM67.059,16.085 L65.578,16.085 L65.578,20.516 L67.059,20.516 L67.059,16.085 ZM84.854,16.085 L80.409,16.085 
                                L80.409,20.516 L84.854,20.516 L84.854,16.085 ZM262.406,10.514 L260.922,10.514 L260.922,11.991 L262.406,11.991 L262.406,10.514 ZM268.088,10.514
                                L266.604,10.514 L266.604,14.946 L268.088,14.946 L268.088,10.514 ZM279.583,10.514 L278.099,10.514 L278.099,11.991 L279.583,11.991 
                                L279.583,10.514 ZM279.583,13.470 L278.099,13.470 L278.099,14.946 L279.583,14.946 L279.583,13.470 ZM941.441,16.085 L939.957,16.085 
                                L939.957,20.516 L941.441,20.516 L941.441,16.085 ZM943.686,16.085 L942.206,16.085 L942.206,20.516 L943.686,20.516 L943.686,16.085 
                                ZM954.059,16.085 L952.578,16.085 L952.578,20.516 L954.059,20.516 L954.059,16.085 ZM971.854,16.085 L967.409,16.085 L967.409,20.516
                                L971.854,20.516 L971.854,16.085 ZM1149.406,10.514 L1147.922,10.514 L1147.922,11.991 L1149.406,11.991 L1149.406,10.514 ZM1155.088,10.514 
                                L1153.604,10.514 L1153.604,14.946 L1155.088,14.946 L1155.088,10.514 ZM1166.583,10.514 L1165.099,10.514 L1165.099,11.991 L1166.583,11.991
                                L1166.583,10.514 ZM1166.583,13.470 L1165.099,13.470 L1165.099,14.946 L1166.583,14.946 L1166.583,13.470 ZM1831.441,16.085 
                                L1829.957,16.085 L1829.957,20.516 L1831.441,20.516 L1831.441,16.085 ZM1833.686,16.085 L1832.206,16.085 L1832.206,20.516
                                L1833.686,20.516 L1833.686,16.085 ZM1844.059,16.085 L1842.578,16.085 L1842.578,20.516 L1844.059,20.516 L1844.059,16.085 ZM1861.854,16.085 
                                L1857.409,16.085 L1857.409,20.516 L1861.854,20.516 L1861.854,16.085 ZM158.479,12.993 L164.174,12.993 L164.151,13.016 L158.501,13.016 
                                L158.479,12.993 ZM407.477,4.954 L403.975,8.445 L400.463,4.954 L407.477,4.954 Z"
            />
        </svg>
    );
}

export default Separator;
