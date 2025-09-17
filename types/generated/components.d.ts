import type { Schema, Struct } from '@strapi/strapi';

export interface BrandBrand extends Struct.ComponentSchema {
  collectionName: 'components_brand_brands';
  info: {
    displayName: 'brand';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ServiceServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_service_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mainPoint: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    point: Schema.Attribute.Text;
    TItle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.brand': BrandBrand;
      'service.service-card': ServiceServiceCard;
    }
  }
}
