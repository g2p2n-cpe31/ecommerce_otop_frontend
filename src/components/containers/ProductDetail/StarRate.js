import React from 'react'
import Rating from '@material-ui/lab/Rating'
import  styled  from 'styled-components'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImageStar from '../../../images/ProductDetail/star.svg'
import EmptyStar from '../../../images/ProductDetail/star_opacity.png'

const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return (
      <Tooltip title={labels[value] || ''}>
        <div {...other} />
      </Tooltip>
    );
  }

 IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

const useStyles = makeStyles({
    rating1: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });


const ContainerRating = styled.p`
  display: flex;
  font-family: Kanit;
  font-size: 10px;
  color:#E89C6B;
  margin-bottom: 0;
`

const  StyleStar = styled(Box)`
    &&{
       display: flex;
       align-items: flex-start;
       width: 140px;
        & span:last-child{
            margin-right: 8px;
        }
        & svg {
            width: 20px;
            height: 20px;
        }
        & span{
          margin-right: 5px;
        }
    }
`

export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(2);
    const classes = useStyles();
    return (
        <>
            <StyleStar className={classes.rating1}>
                    <Rating
                        max={5}
                        name="simple-controlled"
                        value={value}
                        precision={1}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        icon={<img src={ImageStar}/>}
                        emptyIcon={<img src={EmptyStar}/>}
                    />
                     <ContainerRating ml={2}>{labels[hover !== -1 ? hover : value]}</ContainerRating>
            </StyleStar>
        </>
    )
}

