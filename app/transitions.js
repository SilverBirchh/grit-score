export default function() {
  for (let i = 1; i <= 18; i++) {
    this.transition(
      this.fromRoute(`question.${i}`),
      this.toRoute(`question.${i + 1}`),
      this.use('toLeft'),
      this.reverse('toRight')
    );
  }

  this.transition(
    this.fromRoute(`question.18`),
    this.toRoute(`question.score`),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
