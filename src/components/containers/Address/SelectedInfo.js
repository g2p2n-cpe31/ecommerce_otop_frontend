import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ButtonCustom = styled(Button)`
  &&{
        width: 145px;
        height: 43px;
        font-family: "Kanit";
        font-size: 16px;
        color: white;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: Kanit;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #BDBDBD;
  }
`

const EditAndEraseButtonCustom = styled(Button)`
  &&{
        font-family: "Kanit";
        font-size: 16px;

        font-family: Kanit;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        text-decoration-line: underline;
        color: #4F4F4F;
        background: none;
  }
`

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

const SelectedAddrInfoBox = styled.div`
    display: flex;
    margin-top: 13px;
    width: 960px;
    height: 250px;

    background: rgba(91, 60, 120, 0.1);
    border: 1px solid rgba(91, 60, 120, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
`

const TitleBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    /* background: lightsalmon; */
    margin-top: 31px;
    margin-left: 70px;
`

const InTitleBox = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    margin-bottom: 17px;
    color: #828282;
`
const InfoBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    /* background: lightskyblue; */
    margin-top: 31px;
    margin-left: 155px;
`

const InInfoBox = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: #333333;
`

const InInfoBoxLine2 = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    margin-top: 17px;
    margin-bottom: 9px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #333333;
`

const DefaultSign = styled.div`
    display: flex;
    position: absolute;
    margin-top: 2px;
    margin-left: 170px;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 23px;
    background: white;
    opacity: 0.7;
    border-radius: 10px;

    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: linear-gradient(325.22deg, #44275D 0%, #3C5B78 100%);
`

const AddrEdit = styled.p`
    display: flex;
    position: absolute;
    margin-top: 48px;
    margin-left: 823px;
`
const AddrErase = styled.p`
    display: flex;
    position: absolute;
    margin-top: 48px;
    margin-left: 878px;
`

const SetAsDefault = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-top: 103px;
    margin-left: 770px;
`

const AddrText = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 13px;
    letter-spacing: 0.5px;
    color: #333333;
`

const SelectedInfo = () => {
    const classes = useStyles();
    return (
        <div>
            <SelectedAddrInfoBox>
                <TitleBox>
                    <InTitleBox>ชื่อ</InTitleBox>
                    <InTitleBox>โทรศัพท์</InTitleBox>
                    <InTitleBox>ที่อยู่</InTitleBox>
                </TitleBox>
                <InfoBox>
                    <InInfoBox>ปูรณ์  โชตอะไรซักอย่าง</InInfoBox>
                    <DefaultSign>ค่าเริ่มต้น</DefaultSign>
                    <InInfoBoxLine2>088-088-0888</InInfoBoxLine2>
                    <InInfoBox>
                        <AddrText>111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา</AddrText>
                        <AddrText>แขวงบลาบลาบลา เขตบลาบลาบลา</AddrText>
                        <AddrText>จังหวัดบลาบลาบลา</AddrText>
                        <AddrText>10110</AddrText>
                    </InInfoBox>
                </InfoBox>
                <AddrEdit>
                    <EditAndEraseButtonCustom size="small" disabled className={classes.margin}>
                        แก้ไข
                    </EditAndEraseButtonCustom>
                </AddrEdit>
                <AddrErase>
                    <EditAndEraseButtonCustom size="small" disabled className={classes.margin}>
                        ลบ
                    </EditAndEraseButtonCustom>
                </AddrErase>
                <SetAsDefault>
                <ButtonCustom variant="outlined" disabled className={classes.button}>
                    ตั้งเป็นค่าเริ่มต้น
                </ButtonCustom>
                </SetAsDefault>
            </SelectedAddrInfoBox>
        </div>
    )
}

export default SelectedInfo
