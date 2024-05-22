import React from "react"
import { Card, List } from 'antd';
import './itemListContainer.css'

const data = [
    {
      title: ' 01',
    },
    {
      title: ' 02',
    },
    {
      title: ' 03',
    },
    {
      title: ' 04',
    },
    {
      title: ' 05',
    },
    {
      title: ' 06',
    },
  ];

const ItemListContainer =({greeting})=>{
    return(
        <List className="lista"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={greeting + item.title}>
          <a href="#">Card content</a>
           </Card>
      </List.Item>
    )}
  />
    )
}
export default ItemListContainer