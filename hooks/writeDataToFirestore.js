import React, { memo } from 'react'
import firebase from 'firebase/app'


const writeDataToFirestore = async (collection, data) => {
    try {
      const ref = firebase.firestore().collection(collection).doc()
      const response = await ref.set(data)
      return response
    } catch (error) {
      return error
    }
  }

export default writeDataToFirestore