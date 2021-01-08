# React Shopping Cart
  
  
## this.setStateの更新注意点  
*配列に対して、行う際は処理前にコピーを作成する*  
*コピーに対して処理してから、stateを書き換える*  
1.処理中に意図しない情報に書き換わるのを防ぐ  
2.reactが更新前の情報を保持しているので、前回の状態に戻せるため  
*ex)*  
(const stateCopy = [...this.state.something]  
//何らかの処理  
this.setState({ something:処理結果 })
)
  
## Redux --
*stateをactionするたびに、再レンダーされる*  
  
### connct  
class component で使用。  
mapStateToProps:storeで持っているstateの参照(useSelectore)  
mapDispatchToProps:storeのstateを更新するaction関数の呼び出し(useDispatch)  
export defaul connect(mapStateToProps,mapDispatchToProps)(コンポーネント名)  
  
### MogooDB  
参照したいデータのclassを作成  
*ex)*  
(mongoose.model("Products", new mongoose.Schema({  
   //data  
)})  
インスタンスとして、データへのCRAD操作を行いresする  

