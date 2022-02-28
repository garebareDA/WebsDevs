import React from 'react';
import { Container,Spacer } from '@nextui-org/react';
import { useGzip } from '~/hooks/zip';
import { Title } from '~/components/title';
import { TextAreaEncodeDecode } from '~/components/decodeEncode';

export default function Index():React.ReactElement {
  const {decode, setDecode, encode, setEncode, encodeError, decodeError} = useGzip();
  return (
    <div>
      <Container gap={1} justify='center'>
        <Spacer y={1} />
        <Title title='Zip'></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setDecode}
          decodeValue={decode}
          decodeLabel='decode'
          decodeStatus={decodeError ? 'error' : 'default'}
          encodeSet={setEncode}
          encodeValue={encode}
          encodeLabel='encode'
          encodeStatus={encodeError ? 'error' : 'default'}
        />
      </Container>
    </div>
  );
}