import { Icon, Input } from 'antd';
import React, { useState } from 'react';
import DeviceList from './device';
interface Props {
  value: any;
  onChange: Function;
  [name: string]: any;
}
const CheckDevice = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<string[]>([]);
  const productId = props.props['x-component-props']?.productId;

  return (
    <div style={{ width: '100%' }}>
      <Input value={deviceId} addonAfter={<Icon type="gold" onClick={() => setVisible(true)} />} />
      {visible && (
        <DeviceList
          data={deviceId}
          productId={productId}
          close={() => setVisible(false)}
          save={(data: string[]) => {
            setVisible(false);
            setDeviceId(data);
            props.mutators.change(data);
          }}
        />
      )}
    </div>
  );
};
CheckDevice.isFieldComponent = true;
export default CheckDevice;
