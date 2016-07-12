require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关的数据
var imageDatas = require('../data/imagesData.json');
//使用自执行函数，把图片名信息转换成URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
	for(var i=0, j=imageDatasArr.length; i<j; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	wanfxu
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
