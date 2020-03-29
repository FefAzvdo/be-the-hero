import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#f9f9f9',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10
  },

  incident: {
    padding: 24,
    borderRadius: 8, 
    backgroundColor: '#fff',
    marginTop: 24
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8, 
    backgroundColor: '#fff',
    marginBottom: 36,
    marginTop: 24,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 17,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
})