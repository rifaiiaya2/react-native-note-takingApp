import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackParamsList = {
  Home: undefined;
  NoteList: {title: string; notes: {title: string; noteDesc: string}[]};
  InputNote: NoteListParams;
};
export type NoteListParams = {
  title: string;
  noteDesc: string;
  notes: {
    title: string;
    noteDesc: string;
  }[];
};
export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorStackParamsList>;

export type MainNavigatorRouteProp<
  RouteName extends keyof MainNavigatorStackParamsList,
> = RouteProp<MainNavigatorStackParamsList, RouteName>;
