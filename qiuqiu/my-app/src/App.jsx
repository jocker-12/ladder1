import React from 'react';
// class App extends React.Component 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: 1000,
            str: '0',
            ers: '0 ',
            data: [
                {
                    id: 0,
                    num: 1,
                    s: 2,
                }
            ]
        }
    }
    changeTime() {
        let timer = null;
        timer = setInterval(() => { }, this.state.data)
    }
    render() {
        return <div className='wrap'>
            <div className="top">
                <div>
                    <span>得分</span>
                    <span className='str'>{this.state.str}</span>
                </div>
                <div>
                    <span>失分</span>
                    <span className='ers'>{this.state.ers}</span>
                </div>
                <div>
                    <span>
                        点我升级速度
                    </span>
                    <span>
                        {this.state.times}
                    </span>
                </div>
            </div>
            <div className="section">
                {
                    this.state.data.map((item, index) => {
                        return <div><img src="" alt="" /></div>
                    })
                }
            </div>
        </div>
    }
}
export default App
//构建思路===我们的所有气球都是随机生成的 我暂时不确定如何生成这些组件  但 我知道我根据数据操作Dom就可以达到目的我们说根据线下表
//来判断这些的盒子是不是在数据内如果是就删除。通过寻找对应下标删除对应的数据。每次超过某一距离就会删除.
