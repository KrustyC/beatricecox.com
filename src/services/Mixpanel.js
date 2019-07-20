import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.MIX_PANEL_TOKEN);

const envCheck = process.env.NODE_ENV === 'production';

const actions = {
  track: (name, props) => {
    if (envCheck) {
      mixpanel.track(name, props);
    }
  },
};

// eslint-disable-next-line
export const Mixpanel = actions;