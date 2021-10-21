
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Card from '../Card/Card'
import './SearchRs.css'

import { useQuery } from '@apollo/client'
import { getAllProducts } from '../../graphql-client/queries'

function Category(props) {

    const id = useParams();
    const catId=parseInt(id.catId)


    const { loading, error, data } = useQuery(getAllProducts, {
        variables: {
            catId: catId
        },

    });
    if (loading) return <p></p>;
    if (error) return <p>Lỗi khi tải dữ liệu</p>;
    console.log(data)
    return (
        <>
            <div className='subGroup' >
                <Grid container justify="center" spacing={3} style={{ position: 'relative' }} >

                    {data.allprodcts.map((pd) => (

                        <Grid key={pd.id} item xs={12} sm={6} md={4} lg={3}>

                            <Link to={`/tac-pham/${pd.id}`} name={pd.name}>
                                <Card
                                    img={pd.img}
                                    price={pd.price}

                                    name={pd.name}
                                    id={pd.id}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>

            </div>
        </>
    );
}

export default Category;