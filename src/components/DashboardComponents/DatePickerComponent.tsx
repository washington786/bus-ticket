import "intl";

import "intl/locale-data/jsonp/en";

import * as React from "react";
import { View,StyleSheet } from "react-native";
import { Button, Caption, Divider } from "react-native-paper";

import { DatePickerModal } from "react-native-paper-dates";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import GlobalTitle from "../GlobalTexts/GlobalTitle";

export default function DatePickerComponent() {
  const [range, setRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  return (
    <>
      <Button
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined"
        icon={"calendar"}
        color={GlobalColors.primary}
      >
        Select Date
      </Button>

      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        //   disabledDates: [new Date()] // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // saveLabelDisabled={true} // optional, default is false
        // uppercase={false} // optional, default is true
        // label="Select period" // optional
        // startLabel="From" // optional
        // endLabel="To" // optional
        // animationType="slide" // optional, default is slide on ios/android and none on web
        // startYear={2000} // optional, default is 1800
        // endYear={2100} // optional, default is 2200
        // closeIcon="close" // optional, default is "close"
        // editIcon="pencil" // optional, default is "pencil"
        // calendarIcon="calendar" // optional, default is "calendar"
      />
      {range && (
        <>
          <View>
            <GlobalTitle title="From" />
            <Caption style={styles.captions}>{range.startDate?.toLocaleString()}</Caption>
            <Divider/>
          </View>

          <View>
            <GlobalTitle title="To" />
            <Caption style={styles.captions}>{range.endDate?.toLocaleString()}</Caption>
          </View>
        </>
      )}
    </>
  );
}

const styles=StyleSheet.create({
    captions:{
        fontSize:15
    }
})