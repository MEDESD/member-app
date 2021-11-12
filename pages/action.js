import React from "react";
import {
    View,
    StatusBar,
    Button,
    Heading,
    ScrollView,
    Box,
    VStack,
    Divider,
    HStack,
    Fab,
    Icon,
    Image
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import {ImageBackground} from "react-native";
import Background from '../assets/background.png';
import {TouchableOpacity} from "react-native";

const Action = () => {
    return <View style={{height: "100%", backgroundColor: "#000"}}>
        <ImageBackground style={{width: '100%', display: 'flex', justifyContent: 'space-between', height: '76%'}}
                         source={{uri: Background}}>
            <View style={{width: "100%", display: "flex", justifyContent: "start", alignItems: "start"}}>
                <Button
                    _text={{
                        color: "#fff"
                    }}
                    leftIcon={<svg style={{marginLeft: 20}}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="9"
                                   height="16"
                                   fill="none"
                                   viewBox="0 0 9 16"
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M8.318.29a.993.993 0 010 1.406l-5.92 5.92 5.92 5.919a.993.993 0 11-1.405 1.405L.291 8.318a.993.993 0 010-1.405L6.913.291a.993.993 0 011.405 0z"
                            clipRule="evenodd"
                        />
                    </svg>}
                    variant="unstyled"
                >Back</Button>
            </View>
            <View
                style={{width: "100%", color: '#000', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Box width="90%" m={3} p="5"
                     rounded="xl"
                     style={{
                         background: 'linear-gradient(90deg, rgba(254,119,98,1) 65%, rgba(119,72,65,1) 65%, rgba(48,48,48,1) 100%)',
                         borderRadius: 25,
                         display: 'flex',
                         justifyItems: 'center'
                     }}>
                    <VStack space={3} divider={<Divider/>} w="90%">
                        <HStack style={{alignItems: "center"}} justifyContent="space-between">
                            <Box style={{width: '95%'}}>
                                <Heading
                                    style={{color: "#fff", width: '65%', margin: 3, fontSize: 15, fontWeight: "none"}}>20x
                                    Squat thurst split jumps
                                    Details about it</Heading>
                            </Box>
                            <Box>
                                <Heading style={{color: "#fe7762", fontWeight: 'nonw'}} size="xl">65%</Heading>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>

                <Heading size="2xl" style={{color: "#fff"}}>01:25</Heading>
                <Box style={{display: 'flex', flexDirection: 'row'}}>
                    <Button variant={"unstyled"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 17 20"
                        >
                            <path
                                stroke="#F2F2F2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M1.072 15A8 8 0 104 4.072l-2.598 1.5m0 0L2.5 1.474M1.402 5.572L5.5 6.67"
                            />
                        </svg>
                    </Button>
                    <Button variant={"unstyled"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 13 12"
                        >
                            <path
                                fill="#fff"
                                d="M1 0c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V1.93c0-.81-.91-1.28-1.58-.82L4.66 5.18a1 1 0 000 1.64z"
                            />
                        </svg>
                    </Button>
                    <TouchableOpacity>
                        <Image style={{height: 80, width: 80, backgroundColor: "#000"}}
                               source={require('../assets/play.png')}/>
                    </TouchableOpacity>
                    <Button variant={"unstyled"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 13 12"
                        >
                            <path
                                fill="#fff"
                                d="M12 12c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v10c0 .55-.45 1-1 1zM8.34 5.18L2.57 1.11C1.91.64.99 1.12.99 1.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07a1 1 0 000-1.64z"
                            />
                        </svg>
                    </Button><Button variant={"unstyled"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 12 12"
                    >
                        <rect
                            width="12"
                            height="12"
                            x="12"
                            y="12"
                            fill="#fff"
                            rx="2"
                            transform="rotate(-180 12 12)"
                        />
                    </svg>
                </Button>
                </Box>

            </View>
        </ImageBackground>
    </View>
}
export default Action;
