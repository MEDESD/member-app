import React from "react";
import {Box, Button, Divider, Fab, Heading, HStack, Icon, Image, Text, View, VStack} from "native-base";
import ImageProfile from '../assets/profil-picture.png';

const Profile = () => {
    return <View style={{height: "100%", backgroundColor: "#000"}}>
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
        <Heading size="2xl" style={{color: '#fff', marginLeft: 20}}>My profil</Heading>
        <View
            style={{width: "100%", color: '#000', display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Image
                style={{marginTop: 20}}
                size={150}
                resizeMode={"contain"}
                borderRadius={100}
                source={{
                    uri: ImageProfile,
                }}
                alt="Alternate Text"
            />
            <Heading style={{color: '#fff'}}>Jeniffer Winget</Heading>
            <Text style={{color: '#919191'}}>Beginner</Text>
            <Button style={{backgroundColor: 'rgb(254, 119, 98)', borderRadius: 20, margin: 10}}>Edit profile</Button>

            <Box width="90%" m={3} p="5"
                 rounded="xl"
                 style={{backgroundColor: "#262626", borderRadius: 25}}>
                <VStack space={3} divider={<Divider/>} w="90%">
                    <HStack style={{alignItems: "center"}} justifyContent="space-between">
                        <Box>
                            <Heading style={{color: "#c4c4c4", margin: 3, fontSize: 15, fontWeight: "none"}}>Total
                                time</Heading>
                            <Heading style={{
                                margin: 3,
                                fontSize: 25,
                                fontWeight: "none",
                                color: "#ffffff"
                            }}>02:30:15</Heading>
                        </Box>
                        <Box>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="32"
                                fill="none"
                                viewBox="0 0 30 32"
                            >
                                <path
                                    fill="#1787E7"
                                    d="M16.742 0h-4.583a1.099 1.099 0 000 2.196h4.583a1.099 1.099 0 000-2.196zM28.974 7.233l-2.992-2.992c-.417-.416-1.098-.416-1.553 0-.416.417-.416 1.099 0 1.553l2.954 2.954c.227.227.492.303.758.303.265 0 .568-.114.757-.303a1.015 1.015 0 00.076-1.515zM14.432 4.582c-7.574 0-13.71 6.135-13.71 13.71C.723 25.864 6.859 32 14.433 32c7.574 0 13.709-6.135 13.709-13.709S22.006 4.582 14.43 4.582zm5.68 15.186h-5.68a1.099 1.099 0 01-1.098-1.098v-7.12a1.099 1.099 0 012.196 0v6.06h4.582c.606 0 1.098.492 1.098 1.098 0 .568-.492 1.06-1.098 1.06z"
                                />
                            </svg>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
            <Box width="90%" m={3} p="5"
                 rounded="xl"
                 style={{backgroundColor: "#262626", borderRadius: 25}}>
                <VStack space={3} divider={<Divider/>} w="90%">
                    <HStack style={{alignItems: "center"}} justifyContent="space-between">
                        <Box>
                            <Heading style={{color: "#c4c4c4", margin: 3, fontSize: 15, fontWeight: "none"}}>Burned calories</Heading>
                            <Heading style={{
                                margin: 3,
                                fontSize: 25,
                                fontWeight: "none",
                                color: "#ffffff"
                            }}>7200 cal</Heading>
                        </Box>
                        <Box>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="32"
                                fill="none"
                                viewBox="0 0 24 32"
                            >
                                <path
                                    fill="#F6CE42"
                                    fillRule="evenodd"
                                    d="M12.103 31.081C5.1 30.926 0 26.373 0 20.585c0-4.92 2.528-8.228 6.325-12.168 2.48-2.571 3.42-4.973 4.046-6.568.332-.848.575-1.467.912-1.763.97-.85 6.178 4.876 7.607 6.946 3.59 5.197 4.868 7.605 4.918 13.297.051 5.692-4.702 10.908-11.705 10.752zm1.245-11.336c-.805-1.037-1.624-2.09-2.164-3.212a24.288 24.288 0 00-1.595 2.504C8.27 21.429 7.6 23.672 7.6 25.704c0 2.59 1.944 4.696 4.333 4.696 2.39 0 4.334-2.107 4.334-4.696 0-2.201-1.484-4.112-2.919-5.96z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
            <Box width="90%" m={3} p="5"
                 rounded="xl"
                 style={{backgroundColor: "#262626", borderRadius: 25}}>
                <VStack space={3} divider={<Divider/>} w="90%">
                    <HStack style={{alignItems: "center"}} justifyContent="space-between">
                        <Box>
                            <Heading style={{color: "#c4c4c4", margin: 3, fontSize: 15, fontWeight: "none"}}>Points collected</Heading>
                            <Heading style={{
                                margin: 3,
                                fontSize: 25,
                                fontWeight: "none",
                                color: "#ffffff"
                            }}>1200 points</Heading>
                        </Box>
                        <Box>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="24"
                                fill="none"
                                viewBox="0 0 32 24"
                            >
                                <path
                                    fill="#26DBDC"
                                    d="M18.767 0h-5.534l-1.641 8.127h8.816L18.767 0zM31.997 8.127c-.113-.47-.31-.92-.6-1.32l-3.066-4.253C27.299 1.122 25.092 0 23.308 0h-2.615l1.641 8.127h9.663zM11.765 10.016L16 22.204l4.235-12.188h-8.47zM11.306 0H8.692c-1.784 0-3.99 1.122-5.023 2.554L.602 6.807c-.288.4-.487.85-.599 1.32h9.662L11.307 0zM22.233 10.016L17.418 23.88a3.752 3.752 0 001.197-.733L30.847 12.02A3.884 3.884 0 0032 10.016h-9.767zM0 10.016c.176.759.564 1.469 1.153 2.004l12.232 11.128c.35.319.757.565 1.198.733L9.766 10.016H0z"
                                />
                            </svg>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
            {/*<Box width="90%" m={3} p="5"
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
            </Box>*/}

        </View>
    </View>
}

export default Profile;
