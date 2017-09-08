import { AsyncStorage } from 'react-native';

export default class Storage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  async set(key, value) {
    try {
      await AsyncStorage.setItem(this.keyPath(key), JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  }

  async get(key) {
    try {
      const value = await AsyncStorage.getItem(this.keyPath(key));

      return JSON.parse(value);
    } catch (error) {
      throw error;
    }
  }

  async remove(key) {
    try {
      await AsyncStorage.removeItem(this.keyPath(key));
    } catch (error) {
      throw error;
    }
  }

  keyPath(key) {
    return `${this.storageKey}:${key}`;
  }
}
