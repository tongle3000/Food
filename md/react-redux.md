##  redux
    安装: yarn add react-redux
         yarn add redux

  - store
    index.ts
        import { createStore } from 'redux';
        import reducer from './reducer';

        const store = createStore(reducer);

    reducer.ts
        const defaultState = {
            name: 'tong'
        }

        export default (state=defaultState, action) => {
            return state;
        } 


  - App.tsx 
    <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
    </Provider>


  - screens -> TabTwoScreen.tsx
    const mapStateToProps = (state:any) => {
        return {
            name: state.name,          // render 里 alert(this.props.name); 就能打印默认的 name: tong
        }
    }

    export default connect(mapStateToProps, null)(TabTwoScreen);