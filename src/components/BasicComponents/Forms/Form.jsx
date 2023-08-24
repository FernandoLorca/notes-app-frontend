import BasicButton from '../Buttons/BasicButton'
import LoadingButton from '../Buttons/LoadingButton'

export default function Form({ inputs, onSubmit, textButton, loading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3"
    >
      {inputs}
      {loading ? (
        <LoadingButton
          typeButton="submit"
          color="primary"
          text={textButton}
        />
      ) : (
        <BasicButton
          typeButton="submit"
          color="primary"
          text={textButton}
        />
      )}
    </form>
  )
}
