import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    external: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface GlobalSocials extends Schema.Component {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Socials';
    icon: 'link';
  };
  attributes: {
    platform: Attribute.Enumeration<
      ['twitter', 'facebook', 'instagram', 'linkedin']
    > &
      Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface GlobalWebsiteLogos extends Schema.Component {
  collectionName: 'components_global_website_logos';
  info: {
    displayName: 'Website Logos';
    icon: 'landscape';
  };
  attributes: {
    mobile_logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    desktop_logo_light: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    desktop_logo_dark: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PageComponentsBulletPoint extends Schema.Component {
  collectionName: 'components_page_components_bullet_points';
  info: {
    displayName: 'BulletPoint';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface PageComponentsExpandable extends Schema.Component {
  collectionName: 'components_page_components_expandables';
  info: {
    displayName: 'Expandable';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    ExpandableTitle: Attribute.String;
    ExpandableContent: Attribute.Text;
  };
}

export interface PageComponentsResourcesIcons extends Schema.Component {
  collectionName: 'components_page_components_resources_icons';
  info: {
    displayName: 'ToolsIcons';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    IconName: Attribute.String;
  };
}

export interface PageComponentsTeamMember extends Schema.Component {
  collectionName: 'components_page_components_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    quote: Attribute.Text;
    description: Attribute.Text;
    linkedIn: Attribute.String;
    portrait: Attribute.Media<'images'>;
    layout: Attribute.Enumeration<
      ['Portrait left, text right', 'Text left, Portrait right']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Portrait left, text right'>;
  };
}

export interface PageComponentsTestimony extends Schema.Component {
  collectionName: 'components_page_components_testimonies';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    TestimonialName: Attribute.String;
    TestimonialLocation: Attribute.String;
    TestimonialContents: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface PageComponentsTileWithBubbledWords extends Schema.Component {
  collectionName: 'components_page_components_tile_with_bubbled_words';
  info: {
    displayName: 'BubbledWords';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    BubbleContent: Attribute.String;
  };
}

export interface PageComponentsTileWithIcon extends Schema.Component {
  collectionName: 'components_page_components_tile_with_icons';
  info: {
    displayName: 'TileWithIcon';
    icon: 'apps';
    description: '';
  };
  attributes: {
    TileDescription: Attribute.String;
    TileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Service: Attribute.Relation<
      'page-components.tile-with-icon',
      'oneToOne',
      'api::service.service'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.link': GlobalLink;
      'global.socials': GlobalSocials;
      'global.website-logos': GlobalWebsiteLogos;
      'page-components.bullet-point': PageComponentsBulletPoint;
      'page-components.expandable': PageComponentsExpandable;
      'page-components.resources-icons': PageComponentsResourcesIcons;
      'page-components.team-member': PageComponentsTeamMember;
      'page-components.testimony': PageComponentsTestimony;
      'page-components.tile-with-bubbled-words': PageComponentsTileWithBubbledWords;
      'page-components.tile-with-icon': PageComponentsTileWithIcon;
    }
  }
}
