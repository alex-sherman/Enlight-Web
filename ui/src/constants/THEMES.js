const THEMES = () => {
  return {
    light: {},
    dark: {
      "bg-primary": "rgb(37, 38, 36)",
      "card-primary": "rgb(32, 33, 31)",
      "card-hover": "#333333",
      "button-color": "#2d2d2d",
      "navbar-text-color": "var(--text-color)",
      "column-secondary": "rgb(37, 38, 36)",
      "shadow-color": "rgba(20, 20, 20, 1)",
      "card-border": "rgb(30, 30, 30)",
      "text-color": "rgb(246, 236, 225)",
      "text-bg-color": "rgb(43, 43, 41)",
      "icon-primary-color": "#b7b7b7",
      "icon-secondary-color": "#666666",
      "login-icon-bg-color": "var(--text-bg-color)",
      "login-icon-color": "#ffffff",
      "login-input-focus": "rgb(112, 109, 102)",
      "tooltip-text-color": "#ffffff",
      "tooltip-bg-color": "black",
      "input-border": "#615e58",
      "input-placeholder-text-color": "#c6bba8",
      "scrollbar-track-bg": "rgb(36, 37, 35)",
      "scrollbar-thumb-bg": "rgb(68, 68, 65)",
      "scrollbar-thumb-hover-bg": "rgb(73, 73, 65)",
      "success-color": "rgb(47, 172, 39)",
      "danger-color": "rgb(134, 47, 33)",
      "warning-color": "rgb(183, 154, 45)",
      "info-color": "rgb(52, 101, 130)",
      "toast-progress-color": "rgba(32, 33, 31, 0.7)"
    },
    "high-contrast": {
      "bg-primary": "#333",
      "card-primary": "#444",
      "card-hover": "#4f4f4f",
      "column-primary": "#2d2d2d",
      "navbar-text-color": "#e5f963",
      "shadow-color": "rgba(0, 0, 0, 0.31)",
      "card-border": "#272727",
      "text-color": "#e5f963",
      "text-bg-color": "#333",
      "icon-color": "#e5f963",
      "modal-icon-color": "#888"
    }
  };
};

export default THEMES;
