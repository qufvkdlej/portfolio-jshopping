import itemData from '../db/productlist.json';

//항목 불러오는 함수
export default function loadList(productkind: string) {
  let productArr = itemData['product-list']
    .filter(function (e) {
      return e.itemkind === productkind;
    })
    .find(function (e) {
      return e.itemlist;
    });
  return productArr;
}
