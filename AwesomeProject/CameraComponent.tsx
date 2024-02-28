// import React, { useRef, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import CameraKitCameraScreen from 'react-native-camera-kit';

// const CameraComponent = () => {
//   const cameraRef = useRef(null);
//   const [qrCodeData, setQrCodeData] = useState(null);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await (cameraRef.current as any).takePictureAsync(options);
//       console.log(data);
//     }
//   };

//   const onQrCodeScan = (qrCode:any) => {
//     console.log('QR Code scanned:', qrCode);
//     setQrCodeData(qrCode);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.off}
//       />
//       <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'space-around', width: '100%', padding: 15 }}>
//         <TouchableOpacity onPress={takePicture}>
//           <Text style={{ fontSize: 20, color: 'white' }}>Take Picture</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Display QR Code Data */}
//       {qrCodeData && (
//         <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, position: 'absolute', top: 0, left: 0, right: 0 }}>
//           <Text>QR Code Data: {qrCodeData}</Text>
//         </View>
//       )}

//       {/* QR Code Scanner */}
//       <CameraKitCameraScreen
//         showFrame={true}
//         scanBarcode={true}
//         laserColor={'#FF3D00'}
//         frameColor={'#00C853'}
//         colorForScannerFrame={'black'}
//         onReadCode={(event: { nativeEvent: { codeStringValue: any; }; }) => onQrCodeScan(event.nativeEvent.codeStringValue)}
//       />
//     </View>
//   );
// };

// export default CameraComponent;
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Component } from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

class ScanScreen extends Component {
  onSuccess = (e: { data: any; }) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text >
           
          </Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

// const CameraComponent = () => {
    

//     function alert(data: string): void {
//         console.log(data);
//         throw new Error('Function not implemented.');
//     }

//     return(
//         <QRCodeScanner
//         onRead={({data}) => alert(data)}
//         reactivate={true}
//         reactivateTimeout={500}
//         />
//     )
// }

export default ScanScreen;