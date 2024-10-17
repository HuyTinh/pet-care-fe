import { Alert, AppState, StyleSheet, Text, Vibration, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { CameraView } from 'expo-camera'
import { BarCodeScanningResult } from 'expo-camera/build/legacy/Camera.types';
import { useDispatch } from 'react-redux';
// import { startEditPost } from '../Pharmacist/pharmacist.slice';
import { Href, router } from 'expo-router';
import { Overlay } from './orverlay';
import { startEditPost } from '@/pharmacist/prescription';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const scannerprescription = () => {
    const qrLock = useRef(false)
    const appState = useRef(AppState.currentState)
    const distpath = useDispatch()
    useEffect(() => {
        const subcription = AppState.addEventListener("change", (nextAppState) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === "active"
            ) {
                qrLock.current = false;
            }
            appState.current = nextAppState
        })
        return () => {
            subcription.remove()
        }
    }, [])
    async function onBarcodeScanned({ data }: BarCodeScanningResult) {
        try {
            if (data && !qrLock.current) {
                qrLock.current = true;
                Vibration.vibrate();
                // console.log(data);
                distpath(startEditPost(data))
                Alert.alert('Success', "Quét thành công", [
                    { text: 'Ok', onPress: () => router.replace('/(medicine)/prescription' as Href<string | object>) },
                ]);
            }
        }
        catch (error) {
            console.log("lỗi cmnr");
        }
    }
    return (
        <View style={{height: hp(100), width: wp(100), flex: 1}}>
            <CameraView
                style={{ flex: 1 }}
                // className='w-full h-48'
                facing='back'
                onBarcodeScanned={onBarcodeScanned}
                barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                autofocus='on'
            />
            <Overlay />
        </View>
    )
}

export default scannerprescription

const styles = StyleSheet.create({})