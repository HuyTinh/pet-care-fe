import { Alert, AppState, StyleSheet, Vibration, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BarcodeScanningResult, CameraView } from 'expo-camera'
import { useDispatch } from 'react-redux';
import { Overlay } from './orverlay';
import { router } from 'expo-router';
import { pharmacistProfileId } from '@/app/pharmacist.slice';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    async function onBarcodeScanned({ data }: BarcodeScanningResult) {
        try {
            if (data && !qrLock.current) {
                qrLock.current = true;
                Vibration.vibrate();
                distpath(pharmacistProfileId(data))
                Alert.alert('Success', "Quét thành công", [
                    { text: 'Ok', onPress: () => router.replace('/(medicine)/prescription') },
                ]);
            }
        }
        catch (error) {
            console.log("lỗi");
        }
    }
    return (
        <View style={{ height: hp(100), width: wp(100), flex: 1 }}>
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