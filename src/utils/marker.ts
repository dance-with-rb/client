function setBackground(count: number): string {
  if (count < 5) {
    return 'bg-red-500';
  }
  if (count < 10) {
    return 'bg-yellow-500';
  }

  return 'bg-green-500';
}

export function draw(count: number, clickEvent: () => void): HTMLDivElement {
  const markerOuter = document.createElement('div');
  markerOuter.className = `rounded-full ${setBackground(
    count,
  )} h-12 w-12 flex items-center justify-center cursor-pointer select-none`;
  markerOuter.addEventListener('click', () => {
    clickEvent();
  });

  const markerInner = document.createElement('div');
  markerInner.className =
    'rounded-full h-8 w-8 bg-white flex items-center justify-center';
  markerOuter.appendChild(markerInner);

  const markerCountText = document.createElement('p');
  markerCountText.className = 'font-bold';
  markerCountText.appendChild(document.createTextNode(String(count)));
  markerInner.appendChild(markerCountText);

  return markerOuter;
}
