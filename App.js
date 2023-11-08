import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard';
export default function App() {

  const [blogPosts, setBlogPosts] = useState([])

  // useEffect is being called on different lifecycle of the component
  // 1. when component Mounts
  // 2. when component UnMonths

  // How to get a component to re-render
  // 1.change state variable
  // 2. change props

  useEffect(() => {
    fetch('http://192.168.10.118:8080')
    .then(res => res.json())
    .then(data => setBlogPosts(data))
    .catch(err => console.error(err))

  }, [])


  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        
        <View>
          <ScrollView>
            
            {blogPosts.map((singlePost, index) => {
              //single post in an object within an array
              console.log(singlePost)
              return (
                <PostCard singlePost={singlePost} index={index} key={singlePost._id}/>
              )
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })