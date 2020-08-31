export type RootStackParamList = {
  // Root: undefined;
  Root: undefined;
  NotFound: undefined;
  List: {
    id: string;
    title: string;
  };
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree:undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabTwoScreen: undefined;
};


// list
export interface IHotList {
  id: string;
  title: string;
  desc: string;
  imgUrl: string;
}

export interface IHotLists {
  // status: string;
  list: IHotList[];
  refreshing: boolean;
}

// TabTwo 分类
export interface IList {
	id: string;
	title: string;
	image: string;
}

export interface Categorys {
	// status: string;
	categorys: IList[];
}

// export type RootStackParamList = {
//   Root: undefined;
//   NotFound: undefined;
// };

// export type BottomTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type TabOneParamList = {
//   TabOneScreen: undefined;
// };

// export type TabTwoParamList = {
//   TabTwoScreen: undefined;
// };
