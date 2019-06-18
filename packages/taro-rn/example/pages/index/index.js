import React from 'react'
import Taro, { Component } from '@tarojs/taro-rn'
import { View, Text, StyleSheet, Button } from 'react-native'
import { chooseImage, chooseVideo, getImageInfo, saveImageToPhotosAlbum } from '../../../dist/api/media'
import * as toast from '../../../dist/api/interface'
import { getLocation } from '../../../dist/api/geolocation'

console.log('toast', toast)

const styles = StyleSheet.create({
  index: {
    fontSize: 18
    // textAlign: 'center'
  }
})

export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  chooseImage (type) {
    console.log('chooseImage')
    chooseImage({
      count: 2,
      sourceType: [type],
      success (res) {
        console.log('success')
      },
      fail (res) {
        console.log('fail')
      }
    }).then(res => console.log(res)).catch(e => console.log(e))
  }

  chooseVideo (type) {
    console.log('chooseVideo')
    chooseVideo({
      sourceType: [type],
      success (res) {
        console.log('success')
      },
      fail (res) {
        console.log('fail')
      }
    }).then(res => console.log(res)).catch(e => console.log(e))
  }

  getImageInfo () {
    console.log('getImageInfo')
    getImageInfo({src: 'https://nervjs.github.io/taro/img/logo-taro.png'}).then(res => console.log(res))
  }

  saveImageToPhotosAlbum () {
    console.log('saveImageToPhotosAlbum')
    saveImageToPhotosAlbum({filePath: 'https://nervjs.github.io/taro/img/logo-taro.png'}).then(res => console.log(res))
  }

  handleGetLocation () {
    console.log('getLocation')
    getLocation().then(res => console.log(res))
  }

  render () {
    return (
      <View style={{paddingTop: 20}}>
        <Text style={styles.index}>图片</Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Button onPress={this.chooseImage.bind(this, 'album')} title='chooseImage 相册' color='#19AD1A' />
            <Button onPress={this.chooseImage.bind(this, 'camera')} title='chooseImage 相机' color='#19AD1A' />x
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button onPress={this.getImageInfo.bind(this)} title='getImageInfo' color='#19AD1A' />x
            <Button onPress={this.saveImageToPhotosAlbum.bind(this)} title='saveImage' color='#19AD1A' />x
          </View>
        </View>
        <Text style={styles.index}>视频</Text>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={this.chooseVideo.bind(this, 'album')} title='chooseVideo 相册' color='#19AD1A' />
          <Button onPress={this.chooseVideo.bind(this, 'camera')} title='chooseVideo 相机' color='#19AD1A' />
        </View>
        <Text style={styles.index}>位置</Text>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={this.handleGetLocation.bind(this)} title='getLocation' color='#19AD1A' />
        </View>
      </View>
    )
  }
}
