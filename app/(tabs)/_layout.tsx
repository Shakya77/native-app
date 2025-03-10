import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { ImageBackground, Image, Text } from 'react-native'

const TabIcon = () => {
    return (
        <ImageBackground source={images.highlights}
            className='flex flex-row w-full flex-1 min-1-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'>
            <Image source={icons.home} tintColor="#151312" className="size-5"></Image>
            <Text className="text-secondary text-base font-semibold ml-2">Home</Text>
        </ImageBackground>
    )
}

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon />
                    )
                }} />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false
                }} />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false
                }} />
            <Tabs.Screen name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false
                }} />
        </Tabs>
    )
}

export default _Layout