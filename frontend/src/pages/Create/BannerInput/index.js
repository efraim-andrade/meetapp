import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { FaImage } from 'react-icons/fa';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(event) {
    const data = new FormData();

    data.append('file', event.target.files[0]);

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
      toast.success('Imagem enviada com sucesso!');
    } catch (error) {
      toast.error('Algo deu errado ao enviar a imagem, tente novamente!');
    }
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img
            src={
              preview || 'https://api.adorable.io/avatars/69/abott@adorable.png'
            }
            alt=""
          />
        ) : (
          <div className="placeholder">
            <FaImage size={30} />

            <p>Selecionar imagem</p>
          </div>
        )}

        <input
          ref={ref}
          id="banner"
          type="file"
          data-file={file}
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
