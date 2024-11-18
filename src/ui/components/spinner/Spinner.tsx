

const Spinner = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="animate-bounce" role="alert" data-testid="spinner">
                <svg width="100px" height="100px" viewBox="0 0 72 72">
                    <g id="color">
                        <path fill="#B1CC33" d="M37.7394,28.9024l10.1983-10.1983l5.2468,5.2468L42.9863,34.1492 c-1.1588,1.1588-1.8563,2.6718-1.9213,4.1683l-0.1273,2.9232c-0.1036,2.382-1.2137,4.7905-3.0584,6.6352L20.6714,65.0838 c-1.5429,1.5429-3.839,1.7482-5.1284,0.4588l-9.1968-9.1968c-1.2895-1.2895-1.084-3.5856,0.4588-5.1284l17.2079-17.2079 c1.8446-1.8446,4.2531-2.9548,6.6352-3.0584l2.9232-0.1273C35.0676,30.7587,36.5806,30.0612,37.7394,28.9024z" />
                        <path fill="#5C9E31" d="M16.351,60.7845l6.1656-6.1656c6.8117-6.8117,9.1408-10.8955,9.8941-13.1276 c0.6734-1.9952,1.8553-3.8628,3.4063-5.4138l14.7471-14.7471l2.6205,2.6205L42.9863,34.1492 c-1.1588,1.1588-1.8563,2.6718-1.9213,4.1683l-0.1272,2.9233c-0.1036,2.382-1.2137,4.7905-3.0584,6.6352l-17.208,17.2079 c-1.5429,1.5429-3.839,1.7482-5.1284,0.4588l-4.5954-4.5954C13.4592,63.4592,16.351,60.7845,16.351,60.7845z" />
                        <path fill="#B1CC33" d="M37.686,48.0693L20.6713,65.084c-1.5429,1.5429-3.839,1.7482-5.1284,0.4588L6.346,56.346 c-1.2895-1.2895-1.084-3.5856,0.4588-5.1284l17.0147-17.0147L37.686,48.0693z" />
                        <path fill="#5C9E31" d="M32.3157,41.8796l5.78,5.78L20.729,65.0263c-1.5748,1.5748-3.9223,1.7804-5.2433,0.4595L10.778,60.778 c2.5733,2.5733,5.5253-0.1563,5.5253-0.1563l6.2931-6.2931C28.6711,48.2538,31.2502,44.3022,32.3157,41.8796z" />
                        <rect x="12.4241" y="40.2746" width="18.7682" height="19.6103" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.0243 30.0887)" fill="#D0CFCE" />
                        <path fill="#9B9B9A" d="M35.3776,50.3776L22.1061,63.6492l-4.8121-4.8121l6.6357-6.6357c2.5564-2.5564,4.6814-4.8211,6.448-6.8237 L35.3776,50.3776L35.3776,50.3776z" />
                        <path fill="#FCEA2B" d="M37.7394,28.9024l10.1983-10.1983l5.2468,5.2468L42.9863,34.1492 c-1.1588,1.1588-1.8563,2.6718-1.9213,4.1683l-3.5522-0.0048c-2.2744-0.0029-3.9293-1.6565-3.9341-3.9304l-0.0074-3.5586 C35.0676,30.7587,36.5806,30.0612,37.7394,28.9024z" />
                        <path fill="#F1B31C" d="M42.9862,34.1493c-1.1588,1.1588-1.8563,2.6718-1.9213,4.1683l-3.5522-0.0048 c-1.1042-0.0014-2.0615-0.3927-2.7558-1.0543c0.3306-0.4103,0.6842-0.8052,1.0601-1.1811l14.747-14.747l2.6205,2.6205 L42.9862,34.1493L42.9862,34.1493z" />
                        <path fill="#FCEA2B" d="M46.6575,21.0114l4.0442,4.0442c0.8245,0.8245,2.7765,0.2218,4.3376-1.3393l0,0 c1.5611-1.5611,2.1638-3.5131,1.3393-4.3376l-4.0442-4.0442c-0.8245-0.8245-2.7765-0.2218-4.3376,1.3393l0,0 C46.4356,18.2348,45.8329,20.1868,46.6575,21.0114z" />
                        <path fill="#F1B31C" d="M52.8699,21.5468L52.8699,21.5468c1.5611-1.5611,2.147-3.5299,1.3019-4.375l2.3451,2.3451 c0.8451,0.8451,0.2592,2.8139-1.3019,4.375l0,0c-1.5611,1.5611-3.5299,2.147-4.375,1.3019l-2.3451-2.3451 C49.34,23.6939,51.3087,23.1079,52.8699,21.5468z" />
                        <path fill="#F4AA41" d="M55.6575,12.0114l4.0442,4.0442c0.8245,0.8245,3.0015-0.0032,4.8376-1.8393l0,0 c1.8361-1.8361,2.6638-4.0131,1.8393-4.8376l-4.0442-4.0442c-0.8245-0.8245-3.0015,0.0032-4.8376,1.8393l0,0 C55.6606,9.0098,54.8329,11.1868,55.6575,12.0114z" />
                        <path fill="#E27022" d="M62.3699,12.0468L62.3699,12.0468c1.8361-1.8361,2.647-4.0299,1.8019-4.875l2.3451,2.3451 c0.8451,0.8451,0.0342,3.0389-1.8019,4.875l0,0c-1.8361,1.8361-4.0299,2.647-4.875,1.8019l-2.3451-2.3451 C58.34,14.6939,60.5337,13.8829,62.3699,12.0468z" />
                    </g>
                    <g id="hair" />
                    <g id="skin" />
                    <g id="skin-shadow" />
                    <g id="line">
                        <path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M62.3344,5.3344l1.8375,1.8375l-0.0001-0.0002 l2.3451,2.3452c0.8451,0.8451,0.0342,3.0388-1.8019,4.875c-1.8361,1.8362-4.0299,2.647-4.875,1.802l-0.1383-0.1384l0,0 l-4.0442-4.0442c-0.8245-0.8245,0.0032-3.0015,1.8393-4.8376C59.3329,5.3376,61.5099,4.5098,62.3344,5.3344z" />
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M56.0211,20.5021 c0.3033,0.9062-0.1427,2.2344-1.1827,3.2744c-0.897,0.8971-2.0029,1.3395-2.8731,1.2531l-8.6799,8.6799 c-0.1448,0.1448-0.2825,0.2952-0.4126,0.4504c-0.2602,0.3103-0.4902,0.6399-0.6874,0.983 c-0.2957,0.5146-0.5176,1.0596-0.6566,1.6151c-0.0927,0.3704-0.1484,0.7455-0.1647,1.1196l-0.1272,2.9233 c-0.1036,2.382-1.2137,4.7905-3.0583,6.6351l-0.1934,0.1935L20.9706,64.6442l-0.0002,0.0002 c-1.5429,1.5429-3.839,1.7482-5.1284,0.4587l-9.1968-9.1968c-0.806-0.806-1.0279-2.0051-0.7043-3.1678 c0.1941-0.6976,0.5846-1.3822,1.1632-1.9608l17.2078-17.2079c1.8446-1.8446,4.2531-2.9548,6.6352-3.0583l2.9232-0.1273V30.384 c0.5612-0.0243,1.1246-0.1376,1.6709-0.3309c0.9105-0.322,1.7731-0.866,2.4973-1.5903l8.5557-8.5557 c-0.2427-0.9022,0.1978-2.1692,1.2017-3.1731c1.1668-1.1668,2.6965-1.5859,3.5859-1.0379" />
                        <line x1="22" x2="35" y1="37" y2="50" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                        <line x1="8.5" x2="21.5" y1="50.5" y2="63.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Spinner;