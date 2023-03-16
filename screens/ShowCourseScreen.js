import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const ShowCourseScreen = ({ navigation, route }) => {
  // const [course, setCourse] = useState();
  const {_id, course}  = route.params;

  // useEffect(() => {
  //   axios
  //     .get(`https://golf-backend-app.vercel.app/api/courses/${_id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       // setCourse(response.data);
  //       console.log(_id)
  //       console.log(course)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

      return (
        <View style={styles.card}> 
          <Image style={styles.stretch} src={course.image_path[1]}/>
          <Text style={styles.name}>{course.name}</Text> 
          <Text style={styles.location}>{course.location}</Text>
          <Text style={styles.description} numberOfLines={0}>{course.description}</Text>
          <View style={styles.row}>
            <Button title={'Play'} onPress={() => navigation.navigate('HoleScreen', { course: course })}/>
            <Button title={'Website'}/>
          </View>
        </View>
      );
      }

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center', 
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 10
  },
  location: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#4b4b4b'
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50
  },
  stretch: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    marginLeft: '32%'
  }
});

export default ShowCourseScreen;