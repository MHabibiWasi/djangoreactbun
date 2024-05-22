export default function staticUrl(url: string) {
  return `${import.meta.env.VITE_APP_URL}/static/${url}`;
}
