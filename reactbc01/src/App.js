import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import BTHeader from './components/BaiTapLayout/BTHeader';
import Slider from './components/BaiTapLayout/Slider';
import ProductList from './components/BaiTapLayout/ProductList';
import ProductListView from './components/BaiTapLayout/ProductListView';
import BannerSale from './components/BaiTapLayout/BannerSale';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      <BaiTapLayout />
      <DataBinding />
    </div>
  );
}

export default App;
