export default {
    itemContainer: {
        borderRadius: 10,
        marginVertical: 4,
        marginHorizontal: 10,
        overflow: 'hidden',
        backgroundColor: "#fff",
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: 70,
        alignSelf: "center",
        paddingLeft: 20,
    },
    title:{
        flexDirection: 'row', 
        paddingLeft:20,
        marginTop:20,
        fontSize: 18
    },
    flightInfoBox: {
        flexDirection: "row",
        flex: 1,
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        width: 50,
        height: 50,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
        resizeMode: 'contain',
    },
    flightInfo: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    flightInfoItem: {
        color: "#24325e",
        textAlignVertical: "center",
        marginLeft: 15,
        marginRight: 0,
        textAlign: "left",
        paddingBottom:10
    },
    flightNumberBox: {
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        
    },
    moreInfoContainer: {
        width:30,
        height:30,
        marginHorizontal: 10,
        justifyContent: 'center',
        backgroundColor:'red',
        marginBottom: 50,
        borderRadius:7,
        alignItems:'center'   
    },
    moreText:{
        color:"#fff"
    },
    moreInfo: {
        alignItems: "center",
        display: "flex",
        paddingVertical:2,
        marginVertical:2,
        width: 25,
        height: 30,
    },
}