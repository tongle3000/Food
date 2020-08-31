##  redux-thunk

    yarn add redux-thunk

    他是 redux 的中间件,,创建 store 的时候被调用的.
    把所有的异步操作放到 acttionCreate 里管理


##  screens-reduxthunk -> list -> actionCreater.ts
        // 初始状态 获取数据 action
        export const getListDataAction = (data:IHotList[]) => {
            return {
                type: GETLISTDATA,
                data,
                // refreshing: false,
            }
        }

        // 下拉刷新 action
        export const getonRefreshingAction = (data:IHotList[]) => {
            return {
                type: GETREFRESHING,
                data,
                refreshing: false,
            }
        }

        // 初始状态 获取数据
        export const getListData = () => {
            return (dispatch: any) => {
                // let id = this.props.route.params.id;
                // let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist?id=" + id;
                let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist";
                fetch(url)
                    .then((res) => res.json()
                        // alert(JSON.stringify(res))
                    )
                    .then((res) => {
                        const action = getListDataAction(res.data.list)
                        dispatch(action)
                    });
            }
        }

        // 下拉刷新
        export const getRefreshingData = () => {
            return (dispatch: any) => {
                // let id = this.props.route.params.id;
                // let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist?id=" + id;
                let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist";
                fetch(url)
                    .then((res) => res.json()
                        // alert(JSON.stringify(res))
                    )
                    .then((res) => {
                        const action = getonRefreshingAction(res.data.list)
                        dispatch(action)
                    });
            }
        }
##  index.tsx    // 直接 dispatch 调用上面的方法. getListData() , getRefreshingData()

        componentDidMount() {
            ...

            // 调用 mapDispatchToProps 里的 getList() 方法, 再 直接 dispatch 调用上面的方法. getListData()
            this.props.getList()
        }


        // 下拉刷新 调用 mapDispatchToProps 里的 getRefreshingList() 方法, 再 直接 dispatch 调用上面的方法. getRefreshingData()
        _onRefresh = () => {
            this.setState({
                refreshing: true, // 要下拉刷新, refreshing 得为 true;
            })
            this.props.getRefreshingList() // 去获取数据,再把 refreshing 赋值为 false; 就可以一直下拉刷新了;
        }



        const mapDispatchToProps = (dispatch:any) => {
            return {
                getList() {
                    dispatch( getListData() )
                },
                getRefreshingList() {
                    dispatch( getRefreshingData() )
                }

            }
        }

        export default  connect(mapStateToProps, mapDispatchToProps)(List);