import ProductBottom from '../components/ProductBottom';
import ProductMenu from '../components/ProductMenu';
import ProductTopBar from '../components/ProductTopBar';
import loadList from '../function/loadList';
import '../common/listcommon.scss';

export default function Bottom() {
  let productArr = loadList('BOTTOM');
  return (
    <>
      <section className="itemlist">
        <ProductTopBar />
        <div className="itemlist_wrap">
          {productArr.itemlist.map(product => (
            <ProductMenu
              id={product.id}
              thumb={'bottom/' + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <ProductBottom />
      </section>
    </>
  );
}