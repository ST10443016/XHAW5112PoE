import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type Course = {
  name: string;
  type: 'Six-Month' | 'Six-Week';
  price: number;
};

function Home() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')}/>
      <Text style={styles.headingText}>Elevate Yourself</Text>
      <Text style={styles.subHeadingText}>Courses Designed for Personal Growth and Success</Text>
      <Text style={styles.normalText}>
      Founded in 2018, Empowering the Nation offers comprehensive courses in Johannesburg, designed to uplift and equip people. Through our six-month Learnerships and six-week short skills Training Programmes, hundreds have gained valuable, marketable skills to enhance their careers and empower themselves.
      </Text>
    </View>
    </ScrollView>
  ); 
}


function About() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.headingText}> Our Founder </Text>
      <Text style={styles.normalText}>
      Precious Radebe is a visionary leader who recognized the need for accessible and effective education for individuals seeking to transform their lives and careers. With a passion for community development and lifelong learning, they established Empowering the Nation to provide skills-based education that is both practical and empowering.
      </Text>
      <Text style={styles.normalText}>
      Under their leadership, Empowering the Nation has grown from a single training initiative into a recognized institution in Johannesburg, changing the lives of hundreds. The founder’s dedication to making education accessible to all is driven by a core belief: that everyone, regardless of their background, has the potential to achieve great things with the right guidance and support.
      </Text>
      <Text style={styles.normalText}>
      Precious Radebe's vision continues to shape the ethos of Empowering the Nation—one where learning is the key to personal empowerment and community transformation.
      </Text>

      <Text style={styles.headingText}> About us </Text>
      <Text style={styles.normalText}>
      Founded in 2018, Empowering the Nation is committed to uplifting and equipping individuals with practical, marketable skills through our high-quality training programmes in Johannesburg. Our mission is to bridge the gap between potential and opportunity by providing tailored educational solutions for personal and professional development.
      </Text>
      <Text style={styles.normalText}>
      With a range of six-month Learnerships and intensive six-week short skills Training Programmes, we have empowered hundreds of individuals to enhance their careers, unlock new opportunities, and contribute positively to their communities. Whether you are looking to enter a new field, upskill in your current role, or build a stronger foundation for your future, Empowering the Nation is here to support your journey.
      </Text>
      <Text style={styles.normalText}>
      We believe that through education, we can build a stronger, more empowered nation—one individual at a time.
      </Text>
    </View>
    </ScrollView>
  );
}

function Six_Week_Course() {
  return (
    <ScrollView>
    <View style={styles.centerContainer}>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Child Minding</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/ChildMinding.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Birth to six month old baby needs",
          "Seven-month to one year old needs",
          "Toddler needs",
          "Educational toys"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Cooking</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Cooking.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Nutritional requirements",
          "Planning meals",
          "Preparation and cooking meals",
          "Types of protein, carbohydrates & vegatables",
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Garden Maintenance</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/GardenMaintenance.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Water restrictions",
          "Watering requirements",
          "Pruning and propagation of plants",
          "Planting techniques"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    </View>
    </ScrollView>
  );
}

function Six_Month_Course() {
  return (
    <ScrollView>
    <View style={styles.centerContainer}>
    
    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>First Aid</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/FirstAid.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Wounds & bleeding",
          "Burns & fractures",
          "Emergency scene management",
          "Cardio-Pulmonary Resuscitation",
          "Respiratory distress"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Sewing</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Sewing.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Types of stitches",
          "Threading a sewing machine",
          "Sewing buttons, zips, hems & seams",
          "Alterations",
          "Designing & sewing new garments"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Landscaping</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Landscaping.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Indigenous & exotic plants & trees",
          "Fixed structures",
          "Balancing of plants & trees in a garden",
          "Aesthetics of plant shapes & colours",
          "Garden layout"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Life Skills</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/LifeSkills.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Opening a bank account",
          "Basic labour law",
          "Basic reading & writing literacy",
          "Basic numeric literacy"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

  </View>
    </ScrollView>
  );
}

function Contact() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headingText}> Locations: </Text>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>

      <Text style={styles.normalText}> Socials: </Text>
      <Text style={styles.normalText}> Instagram: </Text>
      <Text style={styles.normalText}> WhatsApp: </Text>
    </View>
    </ScrollView>
  );
}

function Query() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  const courses: Course[] = [
    { name: 'First Aid', type: 'Six-Month', price: 1500 },
    { name: 'Sewing', type: 'Six-Month', price: 1500 },
    { name: 'Landscaping', type: 'Six-Month', price: 1500 },
    { name: 'Life Skills', type: 'Six-Month', price: 1500 },
    { name: 'Child Minding', type: 'Six-Week', price: 750 },
    { name: 'Cooking', type: 'Six-Week', price: 750 },
    { name: 'Garden Maintenance', type: 'Six-Week', price: 750 },
  ];

  const toggleCourseSelection = (course: Course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((item) => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculatePrice = () => {
    const original = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    let discount = 0;

    switch (selectedCourses.length) {
      case 2:
        discount = 0.05;
        break;
      case 3:
        discount = 0.10;
        break;
      default:
        if (selectedCourses.length > 3) discount = 0.15;
    }

    const discountAmt = original * discount;
    const final = original - discountAmt;

    setOriginalPrice(original);
    setDiscountPercentage(discount * 100);
    setFinalPrice(final);
  };

  const clearForm = () => {
    setName('');
    setSurname('');
    setContact('');
    setEmail('');
    setOriginalPrice(0);
    setDiscountPercentage(0);
    setFinalPrice(0);
    setSelectedCourses([]);
  };

  return (
    <ScrollView>
      <View style={styles.centerContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>We're Eager to hear from you</Text>
          <Text style={styles.formSubHeader}>Please submit your information and a representative will get in touch with you</Text>

          <Text style={styles.formText}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Your first name"
          />

          <Text style={styles.formText}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSurname}
            value={surname}
            placeholder="Your last name"
          />

          <Text style={styles.formText}>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={setContact}
            value={contact}
            placeholder="Your phone number"
          />

          <Text style={styles.formText}>E-Mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Your e-mail"
          />

          <Text style={styles.formText}>Select Courses</Text>
          {courses.map((course) => (
            <TouchableOpacity
              key={course.name}
              style={[
                styles.courseContainer,
                selectedCourses.includes(course) && styles.selectedCourseContainer,
              ]}
              onPress={() => toggleCourseSelection(course)}
            >
              <Text style={styles.courseText}>
                {course.name} - {course.type} Course (R{course.price})
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.button} onPress={calculatePrice}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={clearForm}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>

          <Text style={styles.formText}>Original Price: R{originalPrice}</Text>
          <Text style={styles.formText}>Discount: {discountPercentage}%</Text>
          <Text style={styles.formText}>Final Price: R{finalPrice}</Text>
        </View>
      </View>
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ drawerLabel: 'Home'}}
      />

      <Drawer.Screen
        name='About'
        component={About}
        options={{ drawerLabel: 'About us'}}
      />

      <Drawer.Screen
        name='Six-Week Course'
        component={Six_Week_Course}
        options={{ drawerLabel: 'Six-Week Course'}}
      />

      <Drawer.Screen
        name='Six-Month Course'
        component={Six_Month_Course}
        options={{ drawerLabel: 'Six-Month Course'}}
      />

      <Drawer.Screen
        name='Contact'
        component={Contact}
        options={{ drawerLabel: 'Contact us'}}
      />

      <Drawer.Screen
        name='Query'
        component={Query}
        options={{ drawerLabel: 'Get a quote'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C8AE7D', 
    height: 1400,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#C8AE7D', 
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: '#8B4513' 
  },
  imageContainer: {
    resizeMode: 'contain',
    height: 150,
    width: 250,
    alignSelf: 'center',
    marginVertical: 15, 
  },
  contentContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 300,
    height: 500,
    shadowColor: "#2C3E50",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  contentHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B35C2D', 
  },
  contentPrice: {
    fontSize: 22,
    marginBottom: 20,
    color: '#B35C2D', 
    fontWeight: '600',
  },
  contentImage: {
    width: 100,
    height: 100,
    borderRadius: 50,  
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#D4A276',
  },
  listContainer: {
    alignContent: 'center',
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 26,
    marginRight: 8,
    color: '#B35C2D', 
  },
  listText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#5C3D2E', 
    flex: 1,
  },
  headingText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: '#5C3D2E', 
    letterSpacing: 0.5,
  },
  subHeadingText: {
    fontSize: 26,
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
    color: '#6B4423', 
    fontWeight: '500',
  },
  normalText: {
    fontSize: 20,
    lineHeight: 28,
    color: '#5C3D2E',
    margin: 10,
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    margin: 10,
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 500,
    shadowColor: "#2C3E50",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    borderColor: '#D4A276',
    borderWidth: 1,
  },
  formHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#5C3D2E',
  },
  formSubHeader: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: 'center',
    color: '#6B4423',
  },
  formText: {
    fontSize: 18,
    color: '#5C3D2E',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
    marginBottom: 25,
    borderColor: '#D4A276',
    backgroundColor: '#FFF8F0',
    fontSize: 16,
    color: '#5C3D2E',
  },
  logo: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
    marginLeft: 0, 
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedCourseContainer: {
    borderColor: 'red',
  },
  courseText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5C3D2E',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF8F0',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#D4A276',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
  },
  clearButtonText: {
    color: '#FFF8F0',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});