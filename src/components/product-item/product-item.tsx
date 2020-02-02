import './styles.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

import IProduct from '../../models/product';
import ISeller from '../../models/seller';
import ISellerSearchResponse from '../../models/seller-api';
import { findSellerById } from '../../services/seller-service';

interface IProductItemProps {
  product: IProduct;
}

export default function ProductItem(props: IProductItemProps) {
  const { product } = props;
  const sellerId = props.product.seller.id;
  const [seller, setSeller] = useState({} as ISeller);
  useEffect(() => {
    findSellerById(sellerId)
      .then(res => res.json())
      .then((res: ISellerSearchResponse) => setSeller(res.seller));
  }, [sellerId]);

  function getSellerNickName() {
    if(seller) {
      return seller.nickname;
    }

    return '';
  }

  return (
    <Card className="item-content">
      <CardMedia 
        className="item-image"
        image={product.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" color="textSecondary" component="p">
          <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </Typography>
        <Typography className="item-texts-contet" gutterBottom variant="body2" component="p">
          {product.title}
        </Typography>
        <Typography className="item-texts-contet" gutterBottom variant="body2" color="textSecondary" component="p">
          Vendedor: {getSellerNickName()}
        </Typography>
      </CardContent>
    </Card>
  );
}