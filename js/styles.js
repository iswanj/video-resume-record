import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 30,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontWeight: '500',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnBack: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
  },
  btnTextDark: {
    color: '#333',
    fontWeight: '600',
    fontSize: 15,
  },
  btnRecord: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 15,
  },
  timeContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  timeButton: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 14,
    borderRadius: 500,
    marginRight: 8,
  },
  timeButtonSelected: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderWidth: 1,
    borderColor: '#333',
  },
  timeOptionText: {
    color: '#Fafafa',
    fontWeight: '600',
    fontSize: 15,
  },
  timeOptionSelectedText: {
    color: '#333',
  },
  recordingBtn: {
    backgroundColor: '#555',
  },
  rerecord: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  counter: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  player: {
    flexDirection: 'column',
  },
  videoCont: {
    flex: 4,
  },
  vidController: {
    flexDirection: 'row',
  },
  confirm: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
