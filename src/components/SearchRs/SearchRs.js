
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client'
import { searchProduct } from '../../graphql-client/queries'
import Card from '../Card/Card'
import './SearchRs.css'

function SearchRs(props) {

    const search = useParams();

    const { loading, error, data } = useQuery(searchProduct);
    if (loading) return <p></p>;
    if (error) return <p>Lỗi khi tải dữ liệu</p>;
    console.log(data)
    return (
        <>
            <div className='subGroup' >
                <Grid container justify="center" spacing={3} style={{ position: 'relative' }} >

                    {data.searchProduct.map((pd) => (

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

export default SearchRs;